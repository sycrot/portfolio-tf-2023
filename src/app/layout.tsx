"use client"
import Nav from "@/components/navbar"

import 'bootstrap/dist/css/bootstrap.css'
import '../styles/app.scss'
import React from "react"

export const metadata = {
  title: 'Portfolio TF',
  description: 'Generated by create next app',
}

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
        <Nav />
        {children}
      </body>
    </html>
  )
}
