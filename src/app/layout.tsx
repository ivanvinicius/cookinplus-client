import type { Metadata } from 'next'

import './globals.css'

import { cookie, nunito, nunito_sans } from '~/utils/fonts'

export const metadata: Metadata = { title: 'Cookin+' }

interface Props {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html className="antialiased" lang="pt-BR">
      <body
        className={`${cookie.variable} ${nunito.variable} ${nunito_sans.variable} bg-white`}
      >
        {children}
      </body>
    </html>
  )
}
