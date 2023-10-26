import type { Metadata } from 'next'

import './globals.css'

import { cookie, nunito, inter } from '~/utils/fonts'

export const metadata: Metadata = { title: 'Cookin Plus' }

interface Props {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html className="antialiased" lang="pt-BR">
      <body
        className={`${cookie.variable} ${nunito.variable} ${inter.variable} min-h-screen bg-white`}
      >
        {children}
      </body>
    </html>
  )
}
