// 'use client';

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

// import { AuthProvider } from '@/app/contexts/AuthContext'
import { StoreProvider } from '@/redux/provider'
// import { useSelector } from '@/redux'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Reni Store',
  description: 'Reni Store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          {/* <AuthProvider> */}
            {children}
          {/* </AuthProvider> */}
        </StoreProvider>
      </body>
    </html>
  )
}
