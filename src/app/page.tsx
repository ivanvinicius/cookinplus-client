import { ChefHat } from 'lucide-react'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

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

          <Link href={'/recipes/meals/56483d7f-b5ee-45cb-8bd1-0ce3d3802260'}>
            Receitas
            <ChefHat className="h-5 w-5" />
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
              Nacionalidades que estão nas nossas receitas
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
          'mx-auto w-full max-w-content p-3 lg:p-4',
          'mt-32 sm:mt-28 lg:mt-12 xl:mt-4',
        ])}
      >
        asdasd
      </main>
    </>
  )
}
