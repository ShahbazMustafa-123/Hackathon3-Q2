import { type SchemaTypeDefinition } from 'sanity'
import product from "./product"
import banner from './banner'
import order from './order'
import foods from './foods'
import chefs from './chefs'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, banner, order, foods, chefs],
}
