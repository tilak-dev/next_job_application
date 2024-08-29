"use client"
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-cyan-950 h-screen overflow-x-hidden">
      <Navbar />
      {children}
      <Footer/>
    </div>
  );
}
