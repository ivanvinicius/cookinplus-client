import { Nunito, Cookie, Inter } from 'next/font/google'

export const cookie = Cookie({
  variable: '--font-cookie',
  subsets: ['latin'],
  weight: '400',
})

export const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin'],
})

export const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})
