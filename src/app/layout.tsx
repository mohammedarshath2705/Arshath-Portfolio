import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/component/navbar'
import { ThemeProvider } from '@/component/theme-provider'
import StarsBackground from '@/component/StarsBackground'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mohammed Arshath | Portfolio',
  description: 'Full Stack Developer Portfolio',
  icons : {
    icon : "/ma.png",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <StarsBackground /> {/* here globally */}
          <Navbar />
          <main className="relative z-10 container mx-auto px-4 py-8">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
