<script setup lang="ts">
const cart = useCartStore()
useHead({ title: 'Panier — WoWLips' })
</script>

<template>
  <div class="px-5 pb-24 pt-32 md:px-10 md:pt-40">
    <h1 class="text-hero mb-14 text-6xl md:mb-20 md:text-8xl">Panier</h1>

    <div v-if="!cart.lines.length" class="flex flex-col items-start gap-6">
      <p class="text-ink-soft">Votre panier est vide pour le moment.</p>
      <NuxtLink to="/boutique" data-cursor="hover" class="text-label border-b hairline pb-1">
        Découvrir la boutique
      </NuxtLink>
    </div>

    <div v-else class="grid gap-16 md:grid-cols-[1fr_360px]">
      <div>
        <div
          v-for="line in cart.lines"
          :key="`${line.productId}-${line.variantId}`"
          class="flex gap-6 hairline border-b py-8 first:pt-0"
        >
          <NuxtLink :to="`/produits/${line.slug}`" class="h-32 w-28 flex-none overflow-hidden bg-cream-200">
            <NuxtImg
              :src="line.image"
              :alt="line.name"
              loading="lazy"
              format="webp"
              width="224"
              height="256"
              class="h-full w-full object-cover"
            />
          </NuxtLink>

          <div class="flex flex-1 flex-col justify-between">
            <div class="flex items-start justify-between gap-4">
              <div>
                <NuxtLink :to="`/produits/${line.slug}`" class="text-lg font-medium hover:opacity-70">{{ line.name }}</NuxtLink>
                <p v-if="line.variantLabel" class="text-sm text-ink-soft">{{ line.variantLabel }}</p>
              </div>
              <p class="font-mono text-sm">{{ formatPrice(line.priceCents * line.quantity) }}</p>
            </div>

            <div class="flex items-center justify-between">
              <div class="flex items-center gap-4 hairline border px-4 py-2 font-mono text-sm">
                <button data-cursor="hover" @click="cart.updateQuantity(line.productId, line.variantId, line.quantity - 1)">−</button>
                <span>{{ line.quantity }}</span>
                <button data-cursor="hover" @click="cart.updateQuantity(line.productId, line.variantId, line.quantity + 1)">+</button>
              </div>
              <button
                data-cursor="hover"
                class="text-label text-ink-soft underline underline-offset-4 hover:text-ink"
                @click="cart.remove(line.productId, line.variantId)"
              >
                Retirer
              </button>
            </div>
          </div>
        </div>
      </div>

      <aside class="h-fit hairline border p-6">
        <p class="text-label mb-4">Résumé</p>
        <div class="flex items-center justify-between border-b hairline pb-4 text-sm">
          <span class="text-ink-soft">Sous-total</span>
          <span class="font-mono">{{ formatPrice(cart.totalCents) }}</span>
        </div>
        <div class="flex items-center justify-between py-4 text-sm">
          <span class="text-ink-soft">Livraison</span>
          <span class="font-mono">Calculée à l'étape suivante</span>
        </div>
        <div class="mb-6 flex items-center justify-between border-t hairline pt-4">
          <span class="text-label">Total</span>
          <span class="font-display text-2xl">{{ formatPrice(cart.totalCents) }}</span>
        </div>
        <NuxtLink
          to="/commande"
          data-cursor="hover"
          class="block w-full bg-ink py-4 text-center font-mono text-xs uppercase tracking-widest2 text-cream transition-opacity hover:opacity-85"
        >
          Passer commande
        </NuxtLink>
      </aside>
    </div>
  </div>
</template>
