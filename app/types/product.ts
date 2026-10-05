export interface ProductVariant {
  id: string
  label: string
  hex: string
}

export interface Product {
  id: string
  slug: string
  name: string
  category: string
  shortDescription: string
  description: string
  priceCents: number
  currency: 'EUR'
  image: string
  gallery: string[]
  variants?: ProductVariant[]
  ingredients?: string[]
  tags?: string[]
  featured?: boolean
  stock: number
}

export interface CartLine {
  productId: string
  slug: string
  name: string
  image: string
  priceCents: number
  variantId?: string
  variantLabel?: string
  quantity: number
}
