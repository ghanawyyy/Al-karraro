import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SucaraSectionPage } from "@/components/sites/alforno/sucara-section-page";
import { getSucaraSection, sucaraSections } from "@/components/sites/alforno/sucara-menus";

interface SucaraSectionPageProps {
  params: Promise<{ section: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return sucaraSections.map((section) => ({ section: section.slug }));
}

export async function generateMetadata(props: SucaraSectionPageProps): Promise<Metadata> {
  const { section } = await props.params;
  const found = getSucaraSection(section);
  return { title: found ? `${found.title} | Suc'ara | Al Karraro Menu` : "Suc'ara | Al Karraro Menu" };
}

export default async function Page(props: SucaraSectionPageProps) {
  const { section } = await props.params;
  const found = getSucaraSection(section);
  if (!found) notFound();
  // Keyed so tabs and the entrance animation reset when hopping between sections.
  return <SucaraSectionPage key={found.slug} section={found} />;
}
