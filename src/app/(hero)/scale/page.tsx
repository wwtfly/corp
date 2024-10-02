import React from "react";
import type { Metadata } from "next";
import Hero from "@/components/hero";
import scaleSrc from "/public/scale.jpg";

export const metadata: Metadata = {
  title: "Scale",
};
export default function Page() {
  return <Hero imgURL={scaleSrc} altTXT="Scale" content="Scale" />;
}
