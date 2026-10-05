import { products } from '../../utils/products-data'

/**
 * GET /api/products
 *
 * Returns the full catalog. Today this reads from the in-memory mock
 * array in server/utils/products-data.ts; swapping to Supabase later
 * means replacing the body of this handler with a `supabase.from('products').select()`
 * call — the response shape (Product[]) stays the same, so nothing on
 * the frontend has to change.
 */
export default defineEventHandler(() => {
  return products
})
