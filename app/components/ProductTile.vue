<script setup lang="ts">
import type { Product } from '~/types/product'

defineProps<{
  product: Product
  offsetClass?: string
  priority?: boolean
}>()
</script>

<template>
  <NuxtLink
    :to="`/produits/${product.slug}`"
    data-cursor="view"
    class="group block"
    :class="offsetClass"
  >
    <div class="relative aspect-[4/5] overflow-hidden bg-cream-200">
      <NuxtImg
        :src="product.image"
        :alt="product.name"
        :loading="priority ? 'eager' : 'lazy'"
        :preload="priority"
        format="webp"
        width="480"
        height="600"
        class="h-full w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-[1.06]"
      />
      <div
        class="pointer-events-none absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/5"
      />
      <div
        class="absolute inset-x-0 bottom-0 translate-y-full bg-cream/95 px-4 py-3 transition-transform duration-500 ease-smooth group-hover:translate-y-0"
      >
        <p class="font-mono text-xs uppercase tracking-widest2">{{ product.name }}</p>
        <p class="font-mono text-xs text-ink-soft">{{ formatPrice(product.priceCents) }}</p>
      </div>
    </div>
    <div class="mt-3 flex items-baseline justify-between md:hidden">
      <p class="text-sm font-medium">{{ product.name }}</p>
      <p class="font-mono text-xs text-ink-soft">{{ formatPrice(product.priceCents) }}</p>
    </div>
  </NuxtLink>
</template>
