'use client'

import * as Accordion from '@radix-ui/react-accordion'
import { forwardRef, ElementRef, ComponentPropsWithoutRef } from 'react'
import { twMerge } from 'tailwind-merge'

type Ref = ElementRef<typeof Accordion.Content>
type Props = ComponentPropsWithoutRef<typeof Accordion.Content>

export const AccordionContent = forwardRef<Ref, Props>(
  ({ className, children, ...props }, ref) => (
    <Accordion.Content
      ref={ref}
      className={twMerge([
        'data-[state=open]:animate-slideDownAccordion data-[state=closed]:animate-slideUpAccordion',
        'overflow-hidden',
        className,
      ])}
      {...props}
    >
      <div className="p-3">{children}</div>
    </Accordion.Content>
  ),
)
