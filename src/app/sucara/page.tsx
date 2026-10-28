import type { Metadata } from "next";
import { SucaraPage } from "@/components/sites/alforno/sucara-page";

export const metadata: Metadata = {
  title: "Suc'ara Coffee Shop | Al Karraro Menu",
};

export default function Page() {
  return <SucaraPage />;
}
