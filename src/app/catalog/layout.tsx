import { Sidebar } from '~/components/sidebar'

interface Props {
  children: React.ReactNode
}

export default function CatalogLayout({ children }: Props) {
  return (
    <div className="lg:grid lg:grid-cols-app">
      <Sidebar />

      <main className="min-h-screen pt-20 lg:col-start-2 lg:p-3">
        {children}
      </main>
    </div>
  )
}
