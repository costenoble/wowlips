import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface RevealBinding {
  delay?: number
  repeat?: boolean
}

/**
 * v-reveal — fade + rise scroll reveal, mirroring the understated
 * on-scroll entrances used throughout the reference site.
 *
 * Usage:
 *   <div v-reveal>...</div>
 *   <div v-reveal="0.15">...</div>                 (extra delay in seconds)
 *   <div v-reveal="{ delay: 0.1, repeat: true }">...</div>   (replays every
 *   time the element re-enters the viewport, instead of once ever)
 */
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', {
    mounted(el: HTMLElement, binding) {
      const value = binding.value as number | RevealBinding | undefined
      const isConfig = value !== null && typeof value === 'object'
      const delay = isConfig ? (value.delay ?? 0) : (typeof value === 'number' ? value : 0)
      const repeat = isConfig && value.repeat === true

      gsap.set(el, { opacity: 0, y: 36 })

      if (repeat) {
        // Elements that persist across page navigations (the footer) go
        // through repeated ScrollTrigger.refresh() calls as pages change
        // height. Tracking state via a single onToggle/self.isActive check
        // stays correct across those refreshes — separate onEnter/onLeaveBack
        // callbacks can drift out of sync with the trigger's real position.
        ScrollTrigger.create({
          trigger: el,
          start: 'top 90%',
          onToggle: (self) => {
            gsap.to(el, {
              opacity: self.isActive ? 1 : 0,
              y: self.isActive ? 0 : 36,
              duration: 1,
              delay: self.isActive ? delay : 0,
              ease: 'power3.out',
            })
          },
        })
      } else {
        ScrollTrigger.create({
          trigger: el,
          start: 'top 90%',
          once: true,
          onEnter: () => {
            gsap.to(el, {
              opacity: 1,
              y: 0,
              duration: 1,
              delay,
              ease: 'power3.out',
            })
          },
        })
      }
    },
  })
})
