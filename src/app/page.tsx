import { Cookie } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center gap-4 ">
      <h1 className="font-nunito text-2xl text-zinc-900">Landing page</h1>

      <Link
        className="text-md flex cursor-pointer items-center gap-1 rounded-lg border-2 border-ruby-500 bg-transparent px-4 py-2 font-inter font-bold text-ruby-500"
        title="Ir para catálogo de receitas"
        href={'/recipes/meals/56483d7f-b5ee-45cb-8bd1-0ce3d3802260'}
      >
        Receitas
        <Cookie className="h-5 w-5" />
      </Link>
    </main>
  )
}
