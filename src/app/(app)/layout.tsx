"use client"
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-cyan-950 overflow-x-hidden">
      <Navbar />
      {children}
    </div>
  );
}
