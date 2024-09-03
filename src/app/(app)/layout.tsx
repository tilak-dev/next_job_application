"use client"
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-cyan-950 min-h-screen relative overflow-x-hidden">
      <Navbar />
      {children}
      <div className="h-14">
        <Footer />
      </div>
      
    </div>
  );
}
