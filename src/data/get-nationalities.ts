/* eslint-disable @typescript-eslint/no-explicit-any */

import { api } from '~/lib/api'
import { Nationality } from '~/types/nationality'
import { Pagination } from '~/types/pagination'
import { concatRouteParams } from '~/utils/concat-route-params'

export async function getNationalities({
  paginate,
  page,
  perPage,
}: Pagination): Promise<Nationality[]> {
  let resource = '/nationalities'

  if (paginate) {
    resource = concatRouteParams({ resource, page, perPage })
  }

  const response = await api(resource)

  if (!response.ok) {
    throw new Error()
  }

  const parsed = await response.json()

  const nationalities = parsed.map(
    (data: any) =>
      ({
        id: data.id,
        name: data.name,
        shortName: data.short_name,
        image: {
          id: data.image.id,
          url: data.image.url,
          fileName: data.image.file_name,
          contentType: data.image.content_type,
          size: data.image.size,
        },
      }) as Nationality,
  )

  return nationalities
}
