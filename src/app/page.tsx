import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

import { FeaturedTitle } from '~/components/feature-title'
import { Link } from '~/components/link'
import { Hero } from '~/components/svgs/hero'
import { Logo } from '~/components/svgs/logo'
import { getNationalities } from '~/data/get-nationalities'

export default async function Home() {
  const nationalities = await getNationalities({ paginate: true, perPage: 6 })

  return (
    <>
      <header className="relative flex justify-center">
        <Hero />

        <nav className="absolute flex w-full max-w-content items-center justify-between p-3 lg:p-4">
          <Logo className="h-10 w-auto flex-shrink-0 " />

          <Link href={'/recipes/meals/cabb452a-8e40-4b35-ab8e-1f56aadeed7a'}>
            Explorar receitas
            <ChevronRight className="h-5 w-5" />
          </Link>
        </nav>

        <div
          className={twMerge([
            'absolute mt-32 flex w-full max-w-content flex-col items-center justify-between p-3',
            'lg:mt-36 lg:flex-row lg:items-start lg:p-4 ',
          ])}
        >
          <div className="flex w-full flex-col items-center lg:items-start">
            <h1
              className={twMerge([
                'text-center font-nunito text-3xl font-bold text-white',
                'lg:max-w-[24rem] lg:text-left lg:text-4xl',
              ])}
            >
              A cozinha do mundo na palma da sua mão
            </h1>

            <span className="mt-6 text-center font-nunito text-sm font-medium text-white lg:mt-8 lg:text-left lg:text-base">
              Diversidade de países na nossa culinária...
            </span>

            <div className="mt-4 flex w-auto flex-wrap items-center justify-center gap-6 lg:justify-start">
              {nationalities.map(({ id, shortName, image: { url } }) => (
                <div
                  key={id}
                  className="flex flex-col items-center justify-center gap-2 lg:gap-3"
                >
                  <Image
                    className="h-8 w-8 rounded-full object-cover lg:h-9 lg:w-9"
                    src={url}
                    alt=""
                    width={64}
                    height={64}
                  />
                  <span className="font-nunito text-sm font-bold text-white">
                    {shortName}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex h-full max-h-102 w-full max-w-102 items-center justify-center lg:mt-0  lg:max-h-full lg:max-w-full">
            <Image
              src="https://cookinplus-images.s3.us-west-2.amazonaws.com/landing-page/banner.png"
              alt=""
              width={496}
              height={496}
            />
          </div>
        </div>
      </header>
      <main
        className={twMerge([
          'mt-32 sm:mt-28 lg:mt-12 xl:mt-4',
          'gap-16 p-3 lg:p-4 ',
          'mx-auto flex w-full max-w-content flex-col',
        ])}
      >
        <section className="flex w-full flex-col items-center gap-4 lg:flex-row lg:gap-8">
          <div className="flex w-full max-w-2xl flex-col gap-3 lg:gap-4">
            <div className="flex flex-col items-center lg:items-end">
              <FeaturedTitle title="Propósito" />
              <h2 className="text-center font-nunito text-xl font-bold text-zinc-700 lg:text-end lg:text-3xl">
                Descubra um mundo de possibilidades e deixe sua criatividade
                assumir o controle.
              </h2>
            </div>

            <p className="text-center font-nunito text-sm font-medium text-zinc-500 lg:text-end lg:text-base">
              Milhares de receitas que você pode fazer de onde estiver, com
              dicas de preparo e ajuda de nutricionistas. Tudo isso para
              facilitar o seu dia-dia e conhecer um pouco mais da incrível
              variedade de alimentos consumidos no Brasil e no mundo.
            </p>
          </div>

          <div className="flex w-full justify-center lg:justify-start">
            <Image
              className="h-[18rem] w-full max-w-70 rounded-3xl object-cover object-top lg:h-auto "
              src="https://images.pexels.com/photos/3992370/pexels-photo-3992370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              width={500}
              height={600}
              quality={100}
            />
          </div>
        </section>

        <section className="flex w-full flex-col-reverse items-center gap-4 lg:flex-row lg:gap-8">
          <div className="flex w-full justify-center lg:justify-end">
            <Image
              className="h-[18rem] w-full max-w-70 rounded-3xl object-cover object-bottom lg:h-auto "
              src="https://images.pexels.com/photos/3679973/pexels-photo-3679973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              width={500}
              height={600}
              quality={100}
            />
          </div>

          <div className="flex w-full max-w-2xl flex-col gap-3 lg:gap-4">
            <div className="flex flex-col items-center lg:items-start">
              <FeaturedTitle title="Nutrição" />
              <h2 className="text-center font-nunito text-xl font-bold text-zinc-700 lg:text-start lg:text-3xl">
                Tenha dicas nutricionais em suas receitas.
              </h2>
            </div>

            <p className="text-center font-nunito text-sm font-medium text-zinc-500 lg:text-start lg:text-base">
              A saúde vem em primeiro lugar! Dessa forma, todas as nossas
              receitas contam com dicas nutricionais valiosas, que vão te ajudar
              a ter uma alimentação mais balanceada e saudável.
            </p>
          </div>
        </section>

        <section className="flex w-full flex-col items-center gap-3 lg:gap-4">
          <div className="flex w-full max-w-2xl flex-col items-center gap-3 lg:gap-4">
            <div className="flex flex-col items-center">
              <FeaturedTitle title="Hora de cozinhar" />
              <h2 className="text-center font-nunito text-xl font-bold text-zinc-700 lg:text-3xl">
                As melhores receitas são aquelas feitas com amor e dedicação.
              </h2>
            </div>

            <p className="text-center font-nunito text-sm font-medium text-zinc-500  lg:text-base">
              É hora de criar, de experimentar, de se divertir. É hora de reunir
              a família e os amigos para compartilhar uma refeição deliciosa.
              Não importa se você é um cozinheiro experiente ou um novato, a
              cozinha é um lugar para todos.
            </p>
          </div>

          <div className="flex w-full justify-center">
            <Image
              className="h-auto w-full max-w-102 rounded-3xl object-cover object-bottom lg:max-w-xl "
              src="https://images.pexels.com/photos/6944040/pexels-photo-6944040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              width={500}
              height={600}
              quality={100}
            />
          </div>
        </section>

        <section className="mx-auto flex w-fit pb-8">
          <Link href={'/recipes/meals/cabb452a-8e40-4b35-ab8e-1f56aadeed7a'}>
            Explorar receitas
            <ChevronRight className="h-5 w-5" />
          </Link>
        </section>
      </main>
    </>
  )
}
