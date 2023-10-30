'use client'

import {
  dehydrate as dehydrateCore,
  DehydrateOptions as DehyOptions,
} from '@tanstack/query-core'
import {
  HydrationBoundary,
  HydrationBoundaryProps,
  QueryClient,
} from '@tanstack/react-query'

function HydrateBoundary(props: HydrationBoundaryProps) {
  return <HydrationBoundary {...props} />
}

function dehydrate(client: QueryClient, options?: DehyOptions | undefined) {
  return dehydrateCore(client, options)
}

export { HydrateBoundary, dehydrate }
