import React from "react";
import type { Metadata } from "next";
import BlogList from "@/app/components/blogList";

export const metadata: Metadata = {
  title: "博客列表",
};
export default function Page() {
  return <BlogList />;
}
