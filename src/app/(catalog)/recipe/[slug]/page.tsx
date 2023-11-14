import { Timer, Users, ShoppingBag, ChefHat, Info } from 'lucide-react'
import Image from 'next/image'

import nathanaJpeg from '~/assets/nathana.jpeg'
import quoteSVG from '~/assets/quote.svg'
import { FeaturedTitle } from '~/components/feature-title'
import { RecipeListItem } from '~/components/recipe/list-item'
import { RecipeNutriUser } from '~/components/recipe/nutri-user'
import { ReipeSynopsis } from '~/components/recipe/synopsis'
import { getRecipe } from '~/data/get-recipe'
import { convertSecondsToHours } from '~/utils/convert-second-to-hour'
import { convertDifficulty } from '~/utils/covert-difficulty'

interface Props {
  params: { slug: string }
  searchParams: { [key: string]: string }
}

export default async function Recipe(props: Props) {
  const { recipe, sections } = await getRecipe(props.params.slug)
  const instructionsCount = recipe.instructions.length

  return (
    <div className="mx-auto flex w-full max-w-content flex-col">
      <div>
        <FeaturedTitle title="Receita" />
        <h1 className="font-nunito text-xl font-bold text-zinc-700 lg:text-2xl">
          {recipe.name}
        </h1>
      </div>

      <section className="mt-4 flex flex-col gap-8 lg:flex-row">
        <div className="flex flex-col">
          <Image
            className="aspect-video h-auto min-h-64 w-full rounded-3xl object-cover lg:h-auto lg:min-h-80 lg:w-124"
            src={recipe.image.url}
            alt={recipe.name}
            width={720}
            height={720}
            placeholder="blur"
            blurDataURL={recipe.image.url}
            quality={100}
            priority
          />

          <div className="mt-4 flex items-start justify-evenly">
            <ReipeSynopsis
              icon={Timer}
              description={convertSecondsToHours(recipe.cookingTime)}
            />
            <ReipeSynopsis
              icon={ShoppingBag}
              description={`${recipe.ingredients.length} itens`}
            />
            <ReipeSynopsis
              icon={Users}
              description={`${recipe.servings} porções`}
            />
            <ReipeSynopsis
              icon={ChefHat}
              description={`${instructionsCount} ${instructionsCount > 1 ? ' Passos' : ' Passo'}`} //eslint-disable-line
            />
            <ReipeSynopsis
              icon={Info}
              description={convertDifficulty(recipe.difficulty)}
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col">
          <strong className="font-nunito text-base font-semibold text-zinc-700">
            Detalhes da receita
          </strong>
          <div className="mt-3 flex items-center gap-3 rounded-xl border border-zinc-100 p-2 lg:rounded-2xl">
            <Image
              className="h-6 w-6 rounded-full border border-zinc-100 object-cover lg:h-8 lg:w-8"
              src={recipe.nationality.image.url}
              alt={recipe.nationality.name}
              width={256}
              height={256}
            />
            <span className="font-nunito text-sm leading-6 text-zinc-600 lg:text-base lg:leading-7">
              Nacionalidade: {recipe.nationality.name}
            </span>
          </div>
          <pre
            title={recipe.story}
            className="mt-3 whitespace-pre-wrap text-justify font-nunito text-sm leading-6 text-zinc-500 lg:line-clamp-[12] lg:text-base lg:leading-7"
          >
            {recipe.story}
          </pre>
        </div>
      </section>

      <section className="mt-16 flex flex-col">
        <div>
          <FeaturedTitle title="Ingredientes" />
          <h2 className="font-nunito text-xl font-bold leading-none text-zinc-700 lg:text-2xl">
            Lista do que você vai precisar
          </h2>
        </div>

        <ul className="mt-4 flex flex-col gap-2 divide-y divide-zinc-100 lg:gap-3">
          {recipe.ingredients.map((igredient) => (
            <li
              key={igredient.id}
              className="group flex w-full items-center justify-start gap-4  p-3 lg:max-w-3xl "
            >
              <RecipeListItem description={igredient.description}>
                <ShoppingBag className="h-4 w-4 text-white lg:h-6 lg:w-6" />
              </RecipeListItem>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <div>
          <FeaturedTitle title="Preparo" />
        </div>

        <ul className="flex flex-col gap-4 ">
          {sections.map((section) => (
            <div key={section.id}>
              <h2 className="font-nunito text-xl font-bold leading-none text-zinc-700 lg:text-2xl">
                {section.name === 'Sem seção' ? 'Instruções' : section.name}
              </h2>

              <div className="mt-4 flex flex-col gap-2 divide-y divide-zinc-100 lg:gap-3">
                {recipe.instructions.map((instruction, index) => {
                  if (instruction.section.id === section.id) {
                    return (
                      <li
                        key={instruction.id}
                        className="group flex w-full items-center justify-start gap-4 p-3 lg:max-w-3xl"
                      >
                        <RecipeListItem description={instruction.description}>
                          <span className="font-nunito text-base font-bold text-white lg:text-xl">
                            {index + 1}
                          </span>
                        </RecipeListItem>
                      </li>
                    )
                  } else {
                    return ''
                  }
                })}
              </div>
            </div>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <div className="flex flex-col lg:items-center lg:justify-center lg:text-center">
          <FeaturedTitle title="Dica da nutricionista" />
          <h2 className="font-nunito text-xl font-bold leading-none text-zinc-700 lg:text-2xl">
            Comer bem para viver melhor
          </h2>
        </div>

        <div className="relative mt-4 w-full rounded-3xl border border-limeade-500 bg-white p-4 lg:p-8 ">
          <Image
            className="absolute -top-4 right-8 z-10 h-8 w-8 lg:-top-6 lg:right-16 lg:h-12 lg:w-12"
            src="https://cookinplus-images.s3.us-west-2.amazonaws.com/landing-page/quote.svg"
            alt="quotes svg"
            width={300}
            height={300}
          />

          <RecipeNutriUser
            imgSrc="https://cookinplus-images.s3.us-west-2.amazonaws.com/landing-page/nathana.png"
            name="Nathana Miranda"
            instagram="nathanamirandaa"
          />

          <pre className="mt-4 whitespace-pre-wrap text-justify font-nunito text-sm leading-6 text-zinc-500 lg:text-base lg:leading-7">
            {recipe.advice.description}
          </pre>
        </div>
      </section>
    </div>
  )
}
