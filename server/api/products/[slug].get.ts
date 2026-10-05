import { findProductBySlug } from '../../utils/products-data'

/**
 * GET /api/products/:slug
 *
 * Same swap-later note as index.get.ts — replace the lookup with a
 * Supabase `.eq('slug', slug).single()` query when the real backend
 * is wired up.
 */
export default defineEventHandler((event) => {
  const slug = getRouterParam(event, 'slug')
  const product = slug ? findProductBySlug(slug) : undefined

  if (!product) {
    throw createError({ statusCode: 404, statusMessage: 'Produit introuvable' })
  }

  return product
})
