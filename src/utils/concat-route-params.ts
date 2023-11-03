interface Props {
  resource: string
  page?: number
  perPage?: number
}

export function concatRouteParams({ resource, page = 1, perPage = 10 }: Props) {
  return `${resource}?paginate=true&page=${page}&per_page=${perPage}`
}
