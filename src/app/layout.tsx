"use client"
import Nav from "@/components/navbar"

import 'bootstrap/dist/css/bootstrap.css'
import '../styles/app.scss'
import React from "react"
import Footer from "./footer"
import { ThemeProvider } from "next-themes"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  React.useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle")
  }, [])

  return (
    <html lang="pt">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="bg-bkg-global">
            <title>Thiago Farias</title>
            <Nav />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
