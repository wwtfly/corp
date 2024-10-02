import React from "react";
import Hero from "@/components/hero";
import reliabilitySrc from "/public/reliability.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reliability",
};
export default function Page() {
  return (
    <Hero imgURL={reliabilitySrc} altTXT="Reliability" content="Reliability" />
  );
}
