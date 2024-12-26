import type { Metadata } from "next";
import "./globals.css";
import { StepProvider } from "./context/StepContext";


export const metadata: Metadata = {
  title: "Multi Step Form",
  description: "Challenge made by Frontendmentor.io",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <StepProvider>
          {children}
        </StepProvider>
      </body>
    </html>
  );
}
