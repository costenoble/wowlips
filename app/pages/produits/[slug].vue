<script setup lang="ts">
const route = useRoute()
const slug = computed(() => route.params.slug as string)
const { data: product, error } = await useProduct(slug)

if (error.value) {
  throw createError({ statusCode: 404, statusMessage: 'Produit introuvable', fatal: true })
}

const cart = useCartStore()

const selectedVariant = ref(product.value?.variants?.[0])
const quantity = ref(1)
const justAdded = ref(false)

function addToCart() {
  if (!product.value) return
  cart.add(product.value, selectedVariant.value, quantity.value)
  justAdded.value = true
  setTimeout(() => (justAdded.value = false), 1800)
}

useHead(() => ({ title: product.value ? `${product.value.name} — WoWLips` : 'WoWLips' }))
</script>

<template>
  <div v-if="product" class="px-5 pb-24 pt-28 md:px-10 md:pt-32">
    <div class="grid gap-10 md:grid-cols-2 md:gap-16">
      <div class="aspect-[4/5] overflow-hidden bg-cream-200">
        <NuxtImg
          :src="product.image"
          :alt="product.name"
          loading="eager"
          preload
          format="webp"
          width="800"
          height="1000"
          class="h-full w-full object-cover"
        />
      </div>

      <div class="md:pt-10">
        <p class="text-label mb-3 text-ink-soft">{{ product.category }}</p>
        <h1 class="text-hero text-5xl md:text-6xl">{{ product.name }}</h1>
        <p class="mt-4 font-mono text-lg">{{ formatPrice(product.priceCents) }}</p>
        <p class="mt-6 max-w-md text-ink-soft">{{ product.shortDescription }}</p>

        <div v-if="product.variants?.length" class="mt-8">
          <p class="text-label mb-3">Teinte — {{ selectedVariant?.label }}</p>
          <div class="flex flex-wrap gap-3">
            <button
              v-for="variant in product.variants"
              :key="variant.id"
              data-cursor="hover"
              class="h-9 w-9 rounded-full ring-1 ring-offset-2 ring-offset-cream transition"
              :class="selectedVariant?.id === variant.id ? 'ring-ink' : 'ring-transparent hover:ring-ink/40'"
              :style="{ backgroundColor: variant.hex }"
              :aria-label="variant.label"
              @click="selectedVariant = variant"
            />
          </div>
        </div>

        <div class="mt-8 flex items-center gap-4">
          <div class="flex items-center gap-4 hairline border px-4 py-2 font-mono text-sm">
            <button data-cursor="hover" @click="quantity = Math.max(1, quantity - 1)">−</button>
            <span>{{ quantity }}</span>
            <button data-cursor="hover" @click="quantity += 1">+</button>
          </div>
          <button
            data-cursor="hover"
            class="flex-1 bg-ink py-4 font-mono text-xs uppercase tracking-widest2 text-cream transition-opacity hover:opacity-85"
            @click="addToCart"
          >
            {{ justAdded ? 'Ajouté ✓' : 'Ajouter au panier' }}
          </button>
        </div>

        <div class="mt-14 space-y-8 hairline border-t pt-8">
          <div>
            <p class="text-label mb-3">Description</p>
            <p class="max-w-md text-ink-soft">{{ product.description }}</p>
          </div>
          <div v-if="product.ingredients?.length">
            <p class="text-label mb-3">Ingrédients clés</p>
            <p class="max-w-md text-ink-soft">{{ product.ingredients.join(', ') }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
