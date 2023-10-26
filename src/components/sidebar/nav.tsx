import * as Accordion from '@radix-ui/react-accordion'
import { ChefHat } from 'lucide-react'
import Link from 'next/link'

import { UiAccordion } from '~/components/ui/accordion'

export function SidebarNav() {
  return (
    <nav>
      <Accordion.Root className="w-full" type="single" collapsible>
        <UiAccordion.Item
          className="overflow-hidden data-[state=open]:border-b data-[state=open]:border-zinc-100/50"
          value="meals"
        >
          <UiAccordion.Trigger className="data-[state=open]:bg-red-50/50">
            <UiAccordion.TriggerContent icon={ChefHat} title="Refeições" />
          </UiAccordion.Trigger>

          <UiAccordion.Content>
            <ul className="group list-none space-y-3 pl-7 text-base text-zinc-600">
              <li>
                <Link
                  className="line-clamp-1 transition-colors duration-300 group-hover:text-ruby-600"
                  title="Café da manhã"
                  href={'#'}
                >
                  Café da manhã
                </Link>
              </li>
              <li>
                <Link
                  className="line-clamp-1 transition-colors duration-300 group-hover:text-ruby-600"
                  title="Café da manhã"
                  href={'#'}
                >
                  Jantar
                </Link>
              </li>
              <li>
                <Link
                  className="line-clamp-1 transition-colors duration-300 group-hover:text-ruby-600"
                  title="Café da manhã"
                  href={'#'}
                >
                  Teste
                </Link>
              </li>
            </ul>
          </UiAccordion.Content>
        </UiAccordion.Item>
      </Accordion.Root>
    </nav>
  )
}
