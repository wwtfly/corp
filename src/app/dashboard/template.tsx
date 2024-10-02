"use client";
import { useState } from "react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [count, setCount] = useState(0);
  return (
    <div className="border-2 border-dashed border-black p-4 mt-10">
      <h2>template layout {count}</h2>
      <button
        className="bg-black text-white p-2 rounded-md"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      {children}
    </div>
  );
}
