import { getRecipe } from '~/data/get-recipe'

interface Props {
  params: { slug: string }
  searchParams: { [key: string]: string }
}

export default async function Recipe(props: Props) {
  const { params } = props
  const recipe = await getRecipe(params.slug)

  return (
    <div className="mx-auto flex w-full max-w-content bg-zinc-100/30">
      content
    </div>
  )
}
