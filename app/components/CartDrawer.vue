<script setup lang="ts">
const cart = useCartStore()
const { $gsap } = useNuxtApp()

// Cascade of the panel's own sections (header / lines / footer) sliding in
// from the right, staggered — no cover layer, just the real cart arriving
// in horizontal waves.
function onPanelEnter(el: Element, done: () => void) {
  const sections = Array.from(el.children)
  $gsap.fromTo(
    sections,
    { xPercent: 100 },
    { xPercent: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out', onComplete: done },
  )
}

function onPanelLeave(el: Element, done: () => void) {
  $gsap.to(el, { xPercent: 100, duration: 0.35, ease: 'power3.inOut', onComplete: done })
}
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-300 ease-smooth"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-smooth"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="cart.isOpen"
        class="fixed inset-0 z-[70] bg-ink/40"
        @click.self="cart.closeDrawer()"
      >
        <Transition appear :css="false" @enter="onPanelEnter" @leave="onPanelLeave">
          <aside class="fixed inset-y-0 right-0 flex w-full max-w-md flex-col overflow-hidden bg-cream">
            <div class="flex items-center justify-between px-6 py-6 hairline border-b">
              <p class="text-label">Panier ({{ cart.totalQuantity }})</p>
              <button data-cursor="hover" class="text-label" @click="cart.closeDrawer()">Fermer</button>
            </div>

            <div v-if="!cart.lines.length" class="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
              <p class="font-display text-3xl uppercase">Panier vide</p>
              <NuxtLink to="/boutique" class="text-label underline underline-offset-4" @click="cart.closeDrawer()">
                Voir la boutique
              </NuxtLink>
            </div>

            <div v-else class="flex-1 overflow-y-auto px-6 py-4">
              <div
                v-for="line in cart.lines"
                :key="`${line.productId}-${line.variantId}`"
                class="flex gap-4 border-b hairline py-5 first:pt-0"
              >
                <NuxtLink
                  :to="`/produits/${line.slug}`"
                  class="h-24 w-20 flex-none overflow-hidden rounded-sm bg-cream-200"
                  @click="cart.closeDrawer()"
                >
                  <NuxtImg
                    :src="line.image"
                    :alt="line.name"
                    loading="lazy"
                    format="webp"
                    width="160"
                    height="192"
                    class="h-full w-full object-cover"
                  />
                </NuxtLink>
                <div class="flex flex-1 flex-col justify-between">
                  <div>
                    <p class="font-medium leading-tight">{{ line.name }}</p>
                    <p v-if="line.variantLabel" class="text-sm text-ink-soft">{{ line.variantLabel }}</p>
                  </div>
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3 font-mono text-sm">
                      <button
                        data-cursor="hover"
                        class="h-6 w-6 hairline border"
                        @click="cart.updateQuantity(line.productId, line.variantId, line.quantity - 1)"
                      >−</button>
                      <span>{{ line.quantity }}</span>
                      <button
                        data-cursor="hover"
                        class="h-6 w-6 hairline border"
                        @click="cart.updateQuantity(line.productId, line.variantId, line.quantity + 1)"
                      >+</button>
                    </div>
                    <p class="font-mono text-sm">{{ formatPrice(line.priceCents * line.quantity) }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div v-if="cart.lines.length" class="hairline border-t px-6 py-6">
              <div class="mb-4 flex items-center justify-between">
                <span class="text-label">Sous-total</span>
                <span class="font-display text-2xl">{{ formatPrice(cart.totalCents) }}</span>
              </div>
              <NuxtLink
                to="/panier"
                data-cursor="hover"
                class="block w-full bg-ink py-4 text-center font-mono text-xs uppercase tracking-widest2 text-cream transition-opacity hover:opacity-85"
                @click="cart.closeDrawer()"
              >
                Voir le panier
              </NuxtLink>
            </div>
          </aside>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>
