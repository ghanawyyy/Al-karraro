import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryPage } from "@/components/sites/alforno/category-page";
import { categoryMenus, getCategoryMenu } from "@/components/sites/alforno/category-menus";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return categoryMenus.map((menu) => ({ category: menu.slug }));
}

export async function generateMetadata(props: CategoryPageProps): Promise<Metadata> {
  const { category } = await props.params;
  const menu = getCategoryMenu(category);
  return { title: menu ? `${menu.title} | Al Karraro Menu` : "Al Karraro Menu" };
}

export default async function Page(props: CategoryPageProps) {
  const { category } = await props.params;
  const menu = getCategoryMenu(category);
  if (!menu) notFound();
  return <CategoryPage menu={menu} />;
}
