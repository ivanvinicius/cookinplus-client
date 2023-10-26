'use client'

import * as Collapsible from '@radix-ui/react-collapsible'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import { Menu } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

import { Logo } from '../logo'
import { SidebarFormWidget } from './form-widget'
import { SidebarNav } from './nav'

export function Sidebar() {
  return (
    <Collapsible.Root
      className={twMerge([
        'data-[state=open]:h-screen lg:data-[state=closed]:h-screen',
        'fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b p-4',
        'lg:right-auto lg:w-80 lg:border-r lg:px-5',
        'border-zinc-100 bg-white',
      ])}
    >
      <div className="flex items-center justify-between">
        <Logo className="h-11 w-auto" />

        <Collapsible.Trigger className="lg:hidden">
          <Menu className="h-6 w-6 text-zinc-700" />
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content
        className={twMerge([
          'data-[state=closed]:sr-only lg:data-[state=closed]:not-sr-only',
          'flex flex-1 flex-col',
        ])}
        forceMount
      >
        <ScrollArea.Root
          className="lg:h-web-menu h-mobile-menu flex w-full "
          type="hover"
        >
          <ScrollArea.Viewport className="flex w-full overflow-y-scroll border-b border-zinc-100 lg:border-0">
            <SidebarNav />
          </ScrollArea.Viewport>

          <ScrollArea.Scrollbar
            className="flex w-1 translate-x-4 touch-none select-none flex-col rounded-lg bg-zinc-100"
            orientation="vertical"
          >
            <ScrollArea.Thumb className="relative rounded-lg bg-red-500 lg:bg-zinc-200" />
          </ScrollArea.Scrollbar>
        </ScrollArea.Root>

        <SidebarFormWidget />
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
