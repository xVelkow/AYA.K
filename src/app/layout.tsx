import type { Metadata } from "next";
import { League_Spartan, Baskervville } from "next/font/google";
import "./globals.css";

const baskervville = Baskervville({ subsets: ["latin"], weight: "400", style: "italic" });
const leagueSpartan = League_Spartan({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={leagueSpartan.className}>
            {children}
        </body>
        </html>
    );
}