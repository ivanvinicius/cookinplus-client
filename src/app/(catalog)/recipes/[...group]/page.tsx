import Link from 'next/link'

interface Props {
  params: { group: string[] }
  searchParams: { [key: string]: string }
}

export default function Recipes(props: Props) {
  console.log(props)

  return (
    <div className="flex flex-col gap-3">
      <Link
        href="../../recipe/feijao-mexicano"
        className="flex text-lg text-blue-500"
      >
        feijao-mexicano
      </Link>

      <Link href="../../recipe/burritos" className="flex text-lg text-blue-500">
        burritos
      </Link>

      <Link href="../../recipe/salsa" className="flex text-lg text-blue-500">
        salsa
      </Link>

      <Link
        href="../../recipe/guacamole"
        className="flex text-lg text-blue-500"
      >
        guacamole
      </Link>

      <Link
        href="../../recipe/quesadillas"
        className="flex text-lg text-blue-500"
      >
        quesadillas
      </Link>
    </div>
  )
}
