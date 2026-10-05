<script setup lang="ts">
const { data: products } = await useProducts()
const featured = computed(() => (products.value ?? []).filter((p) => p.featured))

const heroTitle = ref<HTMLElement | null>(null)
const { reveal } = useSplitReveal()

onMounted(() => {
  nextTick(() => {
    reveal(heroTitle.value, { by: 'chars', stagger: 0.035, delay: 0.15 })
  })
})

// Organic vertical offsets so the grid reads as art-directed rather than
// a uniform e-commerce grid — echoes the staggered work grid on the
// reference site.
const offsets = ['', 'md:mt-16', 'md:-mt-6', 'md:mt-24', 'md:mt-4', 'md:-mt-10']
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative flex min-h-[92vh] flex-col justify-between overflow-hidden px-5 pb-10 pt-32 md:px-10 md:pt-40">
      <div class="flex items-start justify-between text-label">
        <span>Collection 2026</span>
        <span class="hidden md:inline">Soin des lèvres, révélé</span>
        <span>N°1 — Depuis Rennes</span>
      </div>

      <h1
        ref="heroTitle"
        class="text-hero split-line w-full text-center text-[19vw] leading-[1] md:text-[15vw]"
      >
        WOWLIPS
      </h1>

      <div class="flex items-end justify-between">
        <p class="max-w-[16rem] text-sm text-ink-soft md:max-w-xs md:text-base">
          Des formules soin-couleur pensées pour des lèvres nourries, jamais compromises.
        </p>
        <NuxtLink
          to="/boutique"
          data-cursor="hover"
          class="text-label flex items-center gap-2 border-b hairline pb-1"
        >
          Découvrir
          <span aria-hidden="true">↓</span>
        </NuxtLink>
      </div>
    </section>

    <!-- Featured grid -->
    <section class="px-5 py-20 md:px-10 md:py-32">
      <div v-reveal class="mb-12 flex items-end justify-between md:mb-20">
        <h2 class="text-hero text-5xl md:text-7xl">Essentiels</h2>
        <NuxtLink to="/boutique" data-cursor="hover" class="text-label hidden border-b hairline pb-1 md:block">
          Toute la boutique
        </NuxtLink>
      </div>

      <div class="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8">
        <ProductTile
          v-for="(product, i) in featured"
          :key="product.id"
          v-reveal="i * 0.06"
          :product="product"
          :offset-class="offsets[i % offsets.length]"
          :priority="i < 3"
        />
      </div>

      <NuxtLink
        to="/boutique"
        data-cursor="hover"
        class="text-label mt-10 block border-b hairline pb-1 text-center md:hidden"
      >
        Toute la boutique
      </NuxtLink>
    </section>

    <!-- Brand statement -->
    <section class="hairline border-t px-5 py-24 md:px-10 md:py-40">
      <div class="grid gap-10 md:grid-cols-2 md:gap-20">
        <p v-reveal class="text-label">Notre approche</p>
        <p v-reveal="0.1" class="text-hero text-4xl leading-[0.95] md:text-6xl">
          Le soin d'abord. La couleur ne devrait jamais forcer un choix — nourrir et sublimer, dans le même geste.
        </p>
      </div>
      <div class="mt-14 grid gap-6 hairline border-t pt-10 md:grid-cols-3 md:gap-10">
        <div v-reveal>
          <p class="font-mono text-xs text-ink-soft">01</p>
          <p class="mt-2 text-lg">Formules à plus de 90% d'ingrédients d'origine naturelle.</p>
        </div>
        <div v-reveal="0.08">
          <p class="font-mono text-xs text-ink-soft">02</p>
          <p class="mt-2 text-lg">Développées et testées en France, jamais sur les animaux.</p>
        </div>
        <div v-reveal="0.16">
          <p class="font-mono text-xs text-ink-soft">03</p>
          <p class="mt-2 text-lg">Emballages rechargeables, pensés pour durer.</p>
        </div>
      </div>
    </section>

    <!-- CTA banner -->
    <section class="hairline border-t px-5 py-24 text-center md:px-10 md:py-32">
      <p v-reveal class="text-label mb-6">Coffret Essentiels</p>
      <h2 v-reveal="0.05" class="text-hero mx-auto max-w-3xl text-5xl md:text-8xl">
        Le rituel complet, en un geste.
      </h2>
      <NuxtLink
        v-reveal="0.1"
        to="/produits/coffret-essentiels"
        data-cursor="hover"
        class="mt-10 inline-block bg-ink px-8 py-4 font-mono text-xs uppercase tracking-widest2 text-cream transition-opacity hover:opacity-85"
      >
        Découvrir le coffret
      </NuxtLink>
    </section>
  </div>
</template>
