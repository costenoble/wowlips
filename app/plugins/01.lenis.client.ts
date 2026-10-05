import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin((nuxtApp) => {
  const lenis = new Lenis({
    autoRaf: false,
    lerp: 0.1,
    duration: 1.15,
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.1,
  })

  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })
  // Lenis already smooths the scroll; let GSAP's ticker stay tight.
  gsap.ticker.lagSmoothing(0)

  nuxtApp.hook('app:mounted', () => {
    document.documentElement.classList.add('is-ready')
  })

  return {
    provide: { lenis },
  }
})
