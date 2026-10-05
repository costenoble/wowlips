import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Singleton: the overlay bars are registered once by PageTransitionOverlay
// and driven from here, wherever the route transition hooks fire (app.vue).
const barEls = ref<HTMLElement[]>([])

export function usePageTransition() {
  function registerBars(els: HTMLElement[]) {
    barEls.value = els
  }

  // Bars rise from the bottom, left to right, to fully cover the outgoing
  // page — the first half of the cascade.
  function cover(): Promise<void> {
    const { $lenis } = useNuxtApp()
    $lenis?.stop()

    return new Promise((resolve) => {
      gsap.set(barEls.value, { transformOrigin: 'bottom', scaleY: 0 })
      gsap.to(barEls.value, {
        scaleY: 1,
        duration: 0.55,
        stagger: 0.06,
        ease: 'power3.inOut',
        onComplete: () => {
          window.scrollTo(0, 0)
          resolve()
        },
      })
    })
  }

  // Bars keep climbing and exit off the top, same left-to-right order —
  // the cascade continues in one direction instead of reversing.
  function reveal(): Promise<void> {
    return new Promise((resolve) => {
      gsap.set(barEls.value, { transformOrigin: 'top' })
      gsap.to(barEls.value, {
        scaleY: 0,
        duration: 0.65,
        delay: 0.1,
        stagger: 0.06,
        ease: 'power3.inOut',
        onComplete: () => {
          // The new page is fully mounted and settled by now — recalculate
          // ScrollTrigger positions here rather than on Nuxt's page:finish,
          // which fires while the outgoing page is still the current DOM
          // (before this cascade has swapped it out), leaving persistent
          // triggers like the footer's stuck against the old page's height.
          ScrollTrigger.refresh()
          useNuxtApp().$lenis?.start()
          resolve()
        },
      })
    })
  }

  return { registerBars, cover, reveal }
}
