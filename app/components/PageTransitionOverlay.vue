<script setup lang="ts">
// Purely visual — bars sit above everything (but below the custom cursor)
// and are driven by usePageTransition() from the NuxtPage transition hooks
// in app.vue. Kept outside the layout so it wipes the header/footer too.
const BAR_COUNT = 5

const barRefs = ref<HTMLElement[]>([])
const { registerBars } = usePageTransition()

onMounted(() => {
  registerBars(barRefs.value)
})
</script>

<template>
  <div class="pointer-events-none fixed inset-0 z-[90] flex" aria-hidden="true">
    <div
      v-for="n in BAR_COUNT"
      :key="n"
      :ref="(el) => { if (el) barRefs[n - 1] = el as HTMLElement }"
      class="h-full w-1/5 origin-bottom scale-y-0 bg-ink pointer-events-auto"
    />
  </div>
</template>
