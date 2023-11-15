import { twMerge } from 'tailwind-merge'

import { RecipeCard } from '~/components/recipe/card'
import { getRecipeGroups } from '~/data/get-recipe-groups'

interface Props {
  params: { group: string[] }
  searchParams: { [key: string]: string }
}

export default async function Recipes(props: Props) {
  const [group, id] = props.params.group

  const recipes = await getRecipeGroups({ group, id }, { paginate: false })

  if (recipes.length === 0)
    return (
      <div>
        <span className="font-inter text-base font-medium text-zinc-700">
          Nenhum resultado foi encontrado...
        </span>
      </div>
    )

  return (
    <div
      className={twMerge([
        'flex h-fit w-full flex-wrap items-center justify-center gap-5',
        'lg:items-start lg:justify-normal lg:gap-8',
      ])}
    >
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  )
}
