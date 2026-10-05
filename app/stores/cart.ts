import { defineStore } from 'pinia'
import type { CartLine, Product, ProductVariant } from '~/types/product'

const STORAGE_KEY = 'wowlips.cart.v1'

export const useCartStore = defineStore('cart', {
  state: () => ({
    lines: [] as CartLine[],
    isOpen: false,
    hydrated: false,
  }),

  getters: {
    totalQuantity: (state) => state.lines.reduce((sum, l) => sum + l.quantity, 0),
    totalCents: (state) => state.lines.reduce((sum, l) => sum + l.quantity * l.priceCents, 0),
  },

  actions: {
    hydrate() {
      if (!import.meta.client || this.hydrated) return
      this.hydrated = true
      try {
        const raw = localStorage.getItem(STORAGE_KEY)
        if (raw) this.lines = JSON.parse(raw)
      } catch {
        // ignore corrupted local storage
      }
    },

    persist() {
      if (!import.meta.client) return
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.lines))
    },

    add(product: Product, variant?: ProductVariant, quantity = 1) {
      const lineKey = `${product.id}:${variant?.id ?? 'default'}`
      const existing = this.lines.find(
        (l) => `${l.productId}:${l.variantId ?? 'default'}` === lineKey,
      )

      if (existing) {
        existing.quantity += quantity
      } else {
        this.lines.push({
          productId: product.id,
          slug: product.slug,
          name: product.name,
          image: product.image,
          priceCents: product.priceCents,
          variantId: variant?.id,
          variantLabel: variant?.label,
          quantity,
        })
      }

      this.persist()
      this.isOpen = true
    },

    updateQuantity(productId: string, variantId: string | undefined, quantity: number) {
      const line = this.lines.find(
        (l) => l.productId === productId && l.variantId === variantId,
      )
      if (!line) return
      if (quantity <= 0) {
        this.remove(productId, variantId)
        return
      }
      line.quantity = quantity
      this.persist()
    },

    remove(productId: string, variantId?: string) {
      this.lines = this.lines.filter(
        (l) => !(l.productId === productId && l.variantId === variantId),
      )
      this.persist()
    },

    clear() {
      this.lines = []
      this.persist()
    },

    openDrawer() {
      this.isOpen = true
    },
    closeDrawer() {
      this.isOpen = false
    },
  },
})
