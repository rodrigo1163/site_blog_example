import { LandingPage } from "@/templates/lading-page";
import { Metadata } from "next";

export const matadata: Metadata = {
  title: "Site.Set",
  description: "Venda seus produtos como afiliado em um único lugar",
  robots: "index, follow",
};

export default function HomePage() {
  return <LandingPage />;
}
