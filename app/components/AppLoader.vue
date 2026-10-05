<script setup lang="ts">
// Plays on every real page load (hard nav / reload) — internal SPA
// navigations never remount this component (it lives in app.vue, outside
// <NuxtPage>), so it naturally never replays on those; they already have
// their own cascade (usePageTransition). Timed counter + stopmotion
// visual, closing on the same bar-cascade language used everywhere else.
const visible = ref(true)

const frames = [
  '/images/products/creme-agrumes.jpg',
  '/images/products/swatches-couleur.jpg',
  '/images/products/flatlay-couleur.jpg',
  '/images/products/soins-serums.jpg',
]
const frame = ref(0)
const imageRefs = ref<HTMLElement[]>([])
let cycleTimer: ReturnType<typeof setInterval> | undefined

const counterText = ref('0')
const barRefs = ref<HTMLElement[]>([])
const introRefs = ref<HTMLElement[]>([])

function finish() {
  if (cycleTimer) clearInterval(cycleTimer)
  useNuxtApp().$lenis?.start()
  visible.value = false
}

onMounted(() => {
  if (!visible.value) return

  const { $gsap, $lenis } = useNuxtApp()
  $lenis?.stop()

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reducedMotion) {
    finish()
    return
  }

  // Each new frame slides up from below and covers the previous one —
  // a stacked z-index that keeps climbing so the newest is always on top,
  // even once the frame index wraps back around.
  let z = frames.length
  cycleTimer = setInterval(() => {
    frame.value = (frame.value + 1) % frames.length
    const el = imageRefs.value[frame.value]
    z += 1
    $gsap.set(el, { zIndex: z })
    $gsap.fromTo(el, { yPercent: 100 }, { yPercent: 0, duration: 0.26, ease: 'power2.out' })
  }, 280)

  const counter = { value: 0 }
  const tl = $gsap.timeline({ defaults: { ease: 'power3.out' }, onComplete: finish })

  tl.to(introRefs.value, { y: 0, opacity: 1, duration: 0.6, stagger: 0.08 })
  tl.to(
    counter,
    {
      value: 100,
      duration: 3.2,
      ease: 'power1.inOut',
      onUpdate: () => { counterText.value = String(Math.round(counter.value)) },
    },
    '<0.1',
  )
  tl.to(introRefs.value, { autoAlpha: 0, duration: 0.4, ease: 'power2.out' }, '-=0.2')
  tl.to(
    barRefs.value,
    { scaleY: 0, transformOrigin: 'top', duration: 0.6, stagger: 0.06, ease: 'power3.inOut' },
    '-=0.15',
  )
})

onBeforeUnmount(() => {
  if (cycleTimer) clearInterval(cycleTimer)
})
</script>

<template>
  <div v-if="visible" class="fixed inset-0 z-[300] flex" aria-hidden="true">
    <div
      v-for="n in 5"
      :key="n"
      :ref="(el) => { if (el) barRefs[n - 1] = el as HTMLElement }"
      class="h-full w-1/5 bg-cream"
    />

    <div class="pointer-events-none absolute inset-0 z-10 flex flex-col px-5 py-10 text-ink md:px-10">
      <div
        :ref="(el) => { if (el) introRefs[0] = el as HTMLElement }"
        class="flex translate-y-6 items-center justify-between text-label text-ink-soft opacity-0"
      >
        <span>WoWLips</span>
        <span>Chargement</span>
      </div>

      <div
        :ref="(el) => { if (el) introRefs[1] = el as HTMLElement }"
        class="flex flex-1 translate-y-6 flex-col items-center justify-center gap-8 opacity-0"
      >
        <div class="relative h-40 w-32 overflow-hidden bg-cream-200 md:h-56 md:w-44">
          <img
            v-for="(src, i) in frames"
            :key="src"
            :ref="(el) => { if (el) imageRefs[i] = el as HTMLElement }"
            :src="src"
            class="absolute inset-0 h-40 w-32 object-cover md:h-56 md:w-44"
            :class="i === 0 ? 'translate-y-0' : 'translate-y-full'"
            alt=""
          />
        </div>
        <p class="text-hero text-[18vw] leading-[1] md:text-[9vw]">{{ counterText }}</p>
      </div>

      <div
        :ref="(el) => { if (el) introRefs[2] = el as HTMLElement }"
        class="translate-y-6 text-center opacity-0"
      >
        <p class="font-mono text-xs uppercase tracking-widest2 text-ink-soft">Soin des lèvres, révélé</p>
      </div>
    </div>
  </div>
</template>
