<script setup lang="ts">
const cart = useCartStore()
const route = useRoute()
const { y } = useWindowScroll()
const scrolled = computed(() => y.value > 24)

const mobileOpen = ref(false)
watch(() => route.fullPath, () => { mobileOpen.value = false })

const navLinks = [
  { label: 'Boutique', to: '/boutique' },
  { label: 'À propos', to: '/a-propos' },
]
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-colors duration-500"
    :class="scrolled ? 'bg-cream/90 backdrop-blur-sm hairline border-b' : 'bg-transparent'"
  >
    <div class="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-5 md:h-20 md:px-10">
      <nav class="hidden items-center gap-8 md:flex">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          data-cursor="hover"
          class="text-label transition-opacity hover:opacity-50"
        >{{ link.label }}</NuxtLink>
      </nav>

      <button
        class="text-label md:hidden"
        data-cursor="hover"
        @click="mobileOpen = !mobileOpen"
      >
        {{ mobileOpen ? 'Fermer' : 'Menu' }}
      </button>

      <NuxtLink
        to="/"
        data-cursor="hover"
        class="font-display text-2xl tracking-tightest md:absolute md:left-1/2 md:-translate-x-1/2 md:text-3xl"
      >
        WOWLIPS
      </NuxtLink>

      <button
        class="text-label transition-opacity hover:opacity-50"
        data-cursor="hover"
        @click="cart.openDrawer()"
      >
        Panier ({{ cart.totalQuantity }})
      </button>
    </div>

    <!-- Mobile nav overlay -->
    <Transition
      enter-active-class="transition duration-300 ease-smooth"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-smooth"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="mobileOpen"
        class="fixed inset-0 top-16 flex flex-col justify-center gap-6 bg-cream px-8 md:hidden"
      >
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="text-hero text-5xl"
          @click="mobileOpen = false"
        >{{ link.label }}</NuxtLink>
      </div>
    </Transition>
  </header>
</template>
