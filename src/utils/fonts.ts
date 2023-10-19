import { Nunito, Cookie, Nunito_Sans } from 'next/font/google'

export const cookie = Cookie({
  variable: '--font-cookie',
  subsets: ['latin'],
  weight: '400',
})

export const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin'],
})

export const nunito_sans = Nunito_Sans({
  variable: '--font-nunito-sans',
  subsets: ['latin'],
})
