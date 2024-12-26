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
      <head>
        <link rel="shortcut icon" href="./images/favicon-32x32.png" type="image/x-icon" />
      </head>
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
