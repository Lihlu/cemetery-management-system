import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ToastProvider from "@/providers/toast/toast";
import { AuthProvider } from "@/providers/auth";
import { DeceasedPersonProvider } from "@/providers/deceased-person";
import { CemeterySectionProvider } from "@/providers/cemetery-section";
import { BookingProvider } from "@/providers/booking";
import { GravesiteProvider } from "@/providers/gravesite";
import { EmailProvider } from "@/providers/email";
import CustomAntdProvider from "@/providers/config/config-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Memoria",
  description: "Cemetery Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ToastProvider />
      <AuthProvider>
        <CemeterySectionProvider>
          <DeceasedPersonProvider>
            <GravesiteProvider>
              <BookingProvider>
                <EmailProvider>
                  <CustomAntdProvider>
                    <body
                      className={`${geistSans.variable} ${geistMono.variable}`}
                    >
                      {children}
                    </body>
                  </CustomAntdProvider>
                </EmailProvider>
              </BookingProvider>
            </GravesiteProvider>
          </DeceasedPersonProvider>
        </CemeterySectionProvider>
      </AuthProvider>
    </html>
  );
}
