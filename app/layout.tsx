import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
 title: "Portfolio — Lý Gia Bảo",
 description: "Website portfolio cá nhân của Lý Gia Bảo — CTK46",
};

export default function RootLayout({
 children,
}: Readonly<{
 children: ReactNode;
}>) {
 return (
 <html lang="vi">
 <body className="min-h-screen flex flex-col">{children}</body>
 </html>
 );
}