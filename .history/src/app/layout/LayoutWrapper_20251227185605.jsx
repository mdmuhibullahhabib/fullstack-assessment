"use client";

import Navbar from "@/components/shared/Navbar";
import { usePathname } from "next/navigation";


export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");
  const isAuth = pathname.startsWith("/auth/");
  const isExam = pathname.startsWith("/exam/");


    const hideLayout = isAdmin || isAuth || isExam || isResult || isPayment;

  return (
    <>
      {!hideLayout && <Navbar />}

      <main>{children}</main>

      {!hideLayout && <Footer />}
    </>
  );
}