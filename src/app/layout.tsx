'use client';

import './globals.css'
import '../loaders/main.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { StoreProvider } from '@/redux/provider'
import { SideNav, TopNav } from './components/navs'
import { useRouter, usePathname } from 'next/navigation'

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
  const pathname = usePathname()

  const authRoutes = ['/login', '/register', '/reset-password']

  const AuthLayout = (children) => {
    return (
      <div className='MainContainer h-screen px-7 overflow-y-auto'>


        <main className="h-full relative">
          {children}
        </main>

      </div>
    )
  }
  const MainLayout = (children) => {
    return (
      <div className='MainContainer lg:ml-[200px] h-[calc(100vh-65px)] mt-[65px] px-7 overflow-y-auto'>

        <TopNav></TopNav>
        <SideNav></SideNav>


        <main className="h-full relative">
          {children}
        </main>

      </div>
    )
  }

  return (
    <html lang="en">
      <StoreProvider>
        <body className={inter.className + 'bg-white overflow-hidden p-0 m-0'}>

          {
            authRoutes.includes(pathname) ?
              AuthLayout(children) :
              MainLayout(children)
          }

        </body>
      </StoreProvider>
    </html>
  )
}
