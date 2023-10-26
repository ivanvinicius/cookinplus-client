import { Sidebar } from '~/components/sidebar'

interface Props {
  children: React.ReactNode
}

export default function CatalogLayout({ children }: Props) {
  return (
    <div className="lg:grid lg:grid-cols-app">
      <Sidebar />

      <main>{children}</main>
    </div>
  )
}
