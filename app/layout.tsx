import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import ProfilePic from './components/ProfilePic'
import {initializeApp} from 'firebase/app'

const inter = Inter({ subsets: ['latin'] })
const firebaseConfig = {}
const app = initializeApp(firebaseConfig)

export const metadata: Metadata = {
  title: 'Coldstripe\'s Hobby Blog',
  description: 'Created by Cameron Thacker',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className= 'grid bg-stone-200 dark:bg-slate-800'>
        <Navbar/>
        <ProfilePic/>
        {children}
      </body>
    </html>
  )
}
