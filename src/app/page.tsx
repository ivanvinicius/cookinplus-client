import { Cookie } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center gap-4 ">
      <h1 className="font-nunito text-2xl text-zinc-900">Landing page</h1>

      <Link
        className="text-md flex cursor-pointer items-center gap-1 rounded-lg border-2 border-ruby-500 bg-transparent px-4 py-2 font-nunito-sans font-bold text-ruby-500"
        title="Ir para catálogo de receitas"
        href={'/catalog'}
      >
        Receitas
        <Cookie className="h-5 w-5" />
      </Link>
    </main>
  )
}
