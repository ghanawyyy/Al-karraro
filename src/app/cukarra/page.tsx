import type { Metadata } from "next";
import { CukarraPage } from "@/components/sites/alforno/cukarra-page";

export const metadata: Metadata = {
  title: "Cukarra Coffee Shop | Al Karraro Menu",
};

export default function Page() {
  return <CukarraPage />;
}
