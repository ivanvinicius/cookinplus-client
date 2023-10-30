import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query'

import { api } from '~/lib/api'
import { Holiday } from '~/types/holiday'
import { Meal } from '~/types/meal'
import { Nationality } from '~/types/nationality'

interface GetResponse {
  meals: Meal[]
  nationalities: Nationality[]
  holidays: Holiday[]
}

type QueryOption = UseQueryOptions<GetResponse, unknown>
type QueryResult = UseQueryResult<GetResponse, unknown>
type Options = Omit<QueryOption, 'queryKey' | 'queryFn'>

async function get(): Promise<GetResponse> {
  const pagination = '?paginate=false'

  const [meals, nationalities, holidays] = await Promise.all([
    api('/meals'.concat(pagination)),
    api('/nationalities'.concat(pagination)),
    api('/holidays'.concat(pagination)),
  ])

  return {
    meals: await meals.json(),
    nationalities: await nationalities.json(),
    holidays: await holidays.json(),
  }
}

export function useNavContent(options: Options): QueryResult {
  return useQuery({
    ...options,
    queryKey: ['nav-content'],
    queryFn: () => get(),
  })
}
