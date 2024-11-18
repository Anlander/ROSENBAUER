import type { Metadata } from "next";
import "./globals.css";
import Footer from "./component/footer";

export const metadata: Metadata = {
  title: "SES PROTECTION",
  description: "SES PROTECTION – DIN SVENSKA LEVERANTÖR AV BRANDBEKÄMPNINGSUTRUSTNING FRÅN ROSENBAUER",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
