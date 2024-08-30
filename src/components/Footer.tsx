"use client"
import { useParams } from "next/navigation";
import React from "react";

export default function Footer() {
  const params = useParams()
  return (
    <footer className="footer absolute bottom-0 footer-center bg-base-300 text-base-content p-4">
      <aside>
        <p>
          Copyright ©{new Date().getFullYear()} - All right reserved by JOBIFY
        </p>
      </aside>
    </footer>
  );
}
