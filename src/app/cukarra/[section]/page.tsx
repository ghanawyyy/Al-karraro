import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CukarraSectionPage } from "@/components/sites/alforno/cukarra-section-page";
import { getCukarraSection, cukarraSections } from "@/components/sites/alforno/cukarra-menus";

interface CukarraSectionPageProps {
  params: Promise<{ section: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return cukarraSections.map((section) => ({ section: section.slug }));
}

export async function generateMetadata(props: CukarraSectionPageProps): Promise<Metadata> {
  const { section } = await props.params;
  const found = getCukarraSection(section);
  return { title: found ? `${found.title} | Cukarra | Al Karraro Menu` : "Cukarra | Al Karraro Menu" };
}

export default async function Page(props: CukarraSectionPageProps) {
  const { section } = await props.params;
  const found = getCukarraSection(section);
  if (!found) notFound();
  // Keyed so tabs and the entrance animation reset when hopping between sections.
  return <CukarraSectionPage key={found.slug} section={found} />;
}
