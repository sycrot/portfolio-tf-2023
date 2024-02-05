"use client"
import Nav from "@/components/navbar"

import 'bootstrap/dist/css/bootstrap.css'
import '../styles/app.scss'
import React from "react"
import Footer from "./footer"

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
        <title>Thiago Farias</title>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
