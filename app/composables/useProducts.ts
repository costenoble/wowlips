import type { Product } from '~/types/product'

export function useProducts() {
  return useFetch<Product[]>('/api/products', {
    key: 'products-all',
  })
}

export function useProduct(slug: MaybeRefOrGetter<string>) {
  return useFetch<Product>(() => `/api/products/${toValue(slug)}`, {
    key: () => `product-${toValue(slug)}`,
  })
}

export function formatPrice(cents: number, currency: string = 'EUR') {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency,
  }).format(cents / 100)
}
