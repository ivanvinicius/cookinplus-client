import { Advice } from './advice'
import { Holiday } from './holiday'
import { Image } from './image'
import { Ingredient } from './ingredient'
import { Instruction } from './instruction'
import { Meal } from './meal'
import { Nationality } from './nationality'

export interface Recipe {
  id: string
  slug: string
  name: string
  story: string
  cookingTime: number
  servings: number
  difficulty: number
  nationality: Nationality
  image: Image
  meal: Meal
  ingredients: Ingredient[]
  holidays: Holiday[]
  instructions: Instruction[]
  advice: Advice
}
