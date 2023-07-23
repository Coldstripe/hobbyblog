import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import ProfilePic from './components/ProfilePic'
import {initializeApp} from 'firebase/app'

const inter = Inter({ subsets: ['latin'] })
const firebaseConfig = {
  apiKey: "AIzaSyDDyJfDJqDj9neh_is_nu1inOLm7npGmeo",
  authDomain: "coldstripe-d86c6.firebaseapp.com",
  projectId: "coldstripe-d86c6",
  storageBucket: "coldstripe-d86c6.appspot.com",
  messagingSenderId: "232109262081",
  appId: "1:232109262081:web:627735f3463a49f4d84700",
  measurementId: "G-R0H7Y08SE9"
};
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