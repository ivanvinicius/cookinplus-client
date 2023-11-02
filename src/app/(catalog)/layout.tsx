import { Sidebar } from '~/components/sidebar'
import { Corner } from '~/components/svgs/corner'

interface Props {
  children: React.ReactNode
}

export default function CatalogLayout({ children }: Props) {
  return (
    <div className="relative lg:grid lg:grid-cols-app">
      <Sidebar />

      <Corner className="absolute right-0 top-0 hidden h-auto w-120 lg:flex" />

      <main className="min-h-screen p-3 pt-20 lg:col-start-2 lg:p-4 ">
        {children}
      </main>
    </div>
  )
}
