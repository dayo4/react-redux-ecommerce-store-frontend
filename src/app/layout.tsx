// 'use client';

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { StoreProvider } from '@/redux/provider'
import { SideNav, TopNav } from './components/navs'
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
      <body className={inter.className + 'bg-white'}>
        <StoreProvider>

          <TopNav></TopNav>
          
          <div className='flex '>
            <SideNav></SideNav>

            <main className="ml-7 mr-10 mt-12 border-4 w-full">
              {children}
            </main>
          </div>


        </StoreProvider>
      </body>
    </html>
  )
}
