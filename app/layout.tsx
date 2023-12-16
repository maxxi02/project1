import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/Provider'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WeatherEdu',
  description: 'Welcome to WeatherEdu, where we explore innovative and proactive strategies to minimize risks and strengthen resilience. In a world full of uncertainties, Powered by Chatgpt 4, our platform is here to guide you through the intricacies of risk reduction.',
  icons: {
    icon: `'/favicon.ico'`
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
