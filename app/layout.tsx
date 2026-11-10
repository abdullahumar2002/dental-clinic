import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: { default: "Alina Dental Clinic | A brighter kind of dental care", template: "%s | Alina Dental Clinic" },
  description: "Thoughtful dental, orthodontic and implant care in Lahore. Meet the Alina Dental Clinics team and book your visit.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><div className="announcement">A healthier smile starts with a conversation <span>·</span> Call us at <a href="tel:03111248888">0311 124 8888</a></div><Header />{children}<Footer /></body></html>;
}
