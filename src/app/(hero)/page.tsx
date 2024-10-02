import React from "react";
import Hero from "@/components/hero";
import homeSrc from "/public/home.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};
export default function page() {
  return (
    <Hero imgURL={homeSrc} altTXT="Home" content="Welcome to our website" />
  );
}
