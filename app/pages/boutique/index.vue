<script setup lang="ts">
const { data: products, pending } = await useProducts()
const route = useRoute()

const categories = computed(() => {
  const set = new Set((products.value ?? []).map((p) => p.category))
  return ['Tout', ...set]
})

const activeCategory = computed({
  get: () => (route.query.categorie as string) ?? 'Tout',
  set: (value: string) => {
    navigateTo({
      path: '/boutique',
      query: value === 'Tout' ? {} : { categorie: value },
    })
  },
})

const filtered = computed(() => {
  const list = products.value ?? []
  if (activeCategory.value === 'Tout') return list
  return list.filter((p) => p.category === activeCategory.value)
})

useHead({ title: 'Boutique — WoWLips' })
</script>

<template>
  <div class="px-5 pb-24 pt-32 md:px-10 md:pt-40">
    <div class="mb-14 flex flex-col gap-8 md:mb-20 md:flex-row md:items-end md:justify-between">
      <h1 class="text-hero text-6xl md:text-8xl">Boutique</h1>
      <nav class="flex flex-wrap gap-x-6 gap-y-2">
        <button
          v-for="cat in categories"
          :key="cat"
          data-cursor="hover"
          class="text-label pb-1 transition-opacity"
          :class="activeCategory === cat ? 'border-b hairline border-ink' : 'opacity-45 hover:opacity-100'"
          @click="activeCategory = cat"
        >
          {{ cat }}
        </button>
      </nav>
    </div>

    <p v-if="pending" class="text-label">Chargement…</p>

    <div v-else class="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8">
      <ProductTile
        v-for="(product, i) in filtered"
        :key="product.id"
        v-reveal
        :product="product"
        :priority="i < 3"
      />
    </div>

    <p v-if="!pending && !filtered.length" class="text-label">Aucun produit dans cette catégorie.</p>
  </div>
</template>
