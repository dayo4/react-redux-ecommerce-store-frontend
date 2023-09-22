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
      <body className={inter.className + 'bg-white overflow-hidden p-0 m-0'}>

        <div className='MainContainer lg:ml-[220px] h-screen mt-[65px] px-7 overflow-y-auto'>
          <StoreProvider>

            <TopNav></TopNav>
            <SideNav></SideNav>


            <main className="border-4">
              {/* <div className='MainInnerContainer '> */}

              {children}
              {/* </div> */}
            </main>

          </StoreProvider>
        </div>

      </body>
    </html>
  )
}
