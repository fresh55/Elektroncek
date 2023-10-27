import { Inter as FontSans } from "next/font/google"
import localFont from "next/font/local"
import './globals.css'



export const metadata = {
  title: 'Elektroncek',
  description: 'Platforma',
}

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en">
       
      <body >
        
      
        {children}
        </body>
    </html>
  )
}
