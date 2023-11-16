'use client'

import * as Accordion from '@radix-ui/react-accordion'
import * as Collapsible from '@radix-ui/react-collapsible'
import { ChefHat, Flag, Sparkles } from 'lucide-react'
import Link from 'next/link'

import { UiAccordion } from '~/components/ui/accordion'
import { useNavContent } from '~/querys/use-nav-content'

import { Skeleton } from '../skeleton'

export function SidebarNav() {
  const { data, isLoading, isError } = useNavContent()

  if (isLoading) {
    return (
      <div className="flex flex-col gap-3">
        <Skeleton className="h-12" />
        <Skeleton className="h-12" />
        <Skeleton className="h-12" />
      </div>
    )
  }

  if (isError) return <span>Houve um erro...</span>

  return (
    <nav>
      <Accordion.Root className="w-full" type="single" collapsible>
        <UiAccordion.Item
          className="overflow-hidden data-[state=open]:border-b data-[state=open]:border-zinc-100/50"
          value="meals"
        >
          <UiAccordion.Trigger className="data-[state=open]:bg-ruby-50">
            <UiAccordion.TriggerContent icon={ChefHat} title="Refeições" />
          </UiAccordion.Trigger>

          <UiAccordion.Content>
            <ul className="group list-none space-y-3 pl-7 text-base text-zinc-700">
              {isLoading && <li>Carregando...</li>}
              {isError && <li>Houve um erro...</li>}

              {data?.meals.map(({ id, name }) => (
                <li key={id}>
                  <Link
                    className="line-clamp-1 transition-colors duration-300 hover:text-ruby-600"
                    href={`/recipes/meals/${id}`}
                  >
                    <Collapsible.Trigger>{name}</Collapsible.Trigger>
                  </Link>
                </li>
              ))}
            </ul>
          </UiAccordion.Content>
        </UiAccordion.Item>

        <UiAccordion.Item
          className="overflow-hidden data-[state=open]:border-b data-[state=open]:border-zinc-100/50"
          value="nationalities"
        >
          <UiAccordion.Trigger className="data-[state=open]:bg-ruby-50/50">
            <UiAccordion.TriggerContent icon={Flag} title="Nacionalidades" />
          </UiAccordion.Trigger>

          <UiAccordion.Content>
            <ul className="group list-none space-y-3 pl-7 text-base text-zinc-700">
              {isLoading && <li>Carregando...</li>}
              {isError && <li>Houve um erro...</li>}

              {data?.nationalities.map(({ id, name }) => (
                <li key={id}>
                  <Link
                    className="line-clamp-1 transition-colors duration-300 hover:text-ruby-600"
                    href={`/recipes/nationalities/${id}`}
                  >
                    <Collapsible.Trigger>{name}</Collapsible.Trigger>
                  </Link>
                </li>
              ))}
            </ul>
          </UiAccordion.Content>
        </UiAccordion.Item>

        <UiAccordion.Item
          className="overflow-hidden data-[state=open]:border-b data-[state=open]:border-zinc-100/50"
          value="holidays"
        >
          <UiAccordion.Trigger className="data-[state=open]:bg-ruby-50/50">
            <UiAccordion.TriggerContent icon={Sparkles} title="Celebrações" />
          </UiAccordion.Trigger>

          <UiAccordion.Content>
            <ul className="group list-none space-y-3 pl-7 text-base text-zinc-700">
              {isLoading && <li>Carregando...</li>}
              {isError && <li>Houve um erro...</li>}

              {data?.holidays.map(({ id, name }) => (
                <li key={id}>
                  <Link
                    className="line-clamp-1 transition-colors duration-300 hover:text-ruby-600"
                    href={`/recipes/holidays/${id}`}
                  >
                    <Collapsible.Trigger>{name}</Collapsible.Trigger>
                  </Link>
                </li>
              ))}
            </ul>
          </UiAccordion.Content>
        </UiAccordion.Item>
      </Accordion.Root>
    </nav>
  )
}
