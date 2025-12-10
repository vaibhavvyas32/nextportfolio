import type { Metadata } from "next";
import { Theme } from "@radix-ui/themes";
import '@radix-ui/themes/styles.css';
import Navbar from "@/components/Navbar";
import DarkModeProvider from "@/context/DarkModeContext";
import { Toaster } from "sonner";
import { Analytics } from '@vercel/analytics/react';
import './globals.css'
import Provider from "@/context/Provider";
import dynamic from "next/dynamic";
const ConditionalFooter = dynamic(() => import("./ConditionalFooter"), { ssr: false });

export const metadata: Metadata = {
  title: "Vaibhav Vyas",
  description: "Vaibhav Vyas is a Software Developer specializing in building impactful web applications from scratch. Explore his portfolio to see my projects and skills.",
  keywords: "Vaibhav Vyas, Full Stack Developer, Web Developer, Portfolio, JavaScript, TypeScript, React, Django, software engineer, C++, AWS",
  authors: [{ name: "Vaibhav Vyas" }],
  openGraph: {
    title: "Vaibhav",
    description: "",
    url: "/",
    siteName: "vaibhav",
    images: [
      {
        url: "",
        width: 400,
        height: 200,
        alt: "vaibhav",
      },
    ],
    type: "website",
  },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'fardeen',
  //   creator: '@fardeentwt',
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider>
        <DarkModeProvider>
          <body className={`bg-white dark:bg-black`}>
            <Toaster position='bottom-right' />
            <Theme className="dark:!bg-black">
              <Navbar />
              {children}
              <Analytics />
              <ConditionalFooter />
            </Theme>
          </body>
        </DarkModeProvider>
      </Provider>
    </html>
  );
}