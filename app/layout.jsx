import { Inter, Fira_Code } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const firaCode = Fira_Code({ subsets: ["latin"] })

export const metadata = {
  title: "Dhaval Patil | Frontend Developer",
  description: "Creative Frontend Developer crafting beautiful, accessible, and performant web experiences.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
