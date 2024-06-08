import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Ashley's Website",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            {/*<head>*/}
            {/*    <link rel="stylesheet" href="globals.css"/>*/}
            {/*    <title></title>*/}
            {/*</head>*/}
        <body className={inter.className}>
        <Navbar/>
        {children}
        </body>
        </html>
    );
}


