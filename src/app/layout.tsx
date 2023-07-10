import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/ui/theme-provider'
import Nav from '@/components/Nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fluxr',
  description: 'A simple and fast cash flow tracker',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="flex flex-col justify-center mx-auto w-full md:max-w-4xl border-x border-b rounded-sm p-2">
            <Nav />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
