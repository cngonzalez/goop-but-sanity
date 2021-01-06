import React from "react"
import "fontsource-source-sans-pro"
import "@fontsource/pt-serif"
import NavBar from './navigation'

export default function Layout({ children }) {
return <main>
  <title>Lifestyled.</title>
  <NavBar />
  {children}
  </main> }
