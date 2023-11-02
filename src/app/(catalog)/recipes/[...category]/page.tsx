import Link from 'next/link'

interface Props {
  params: { category: string[] }
  searchParams: { [key: string]: string }
}

export default function GetRecipesBy(props: Props) {
  console.log(props)

  return (
    <div>
      <span className="mb-10 block">get recipes by</span>

      <Link href="../../recipe/feijao-mexicano" className="text-blue-500">
        feijao-mexicano
      </Link>
      <br />
      <Link href="../../recipe/burritos" className="text-blue-500">
        burritos
      </Link>
    </div>
  )
}
