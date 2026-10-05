import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { CustomEase } from 'gsap/CustomEase'

export default defineNuxtPlugin(() => {
  gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase)

  // Slightly softer default easing across the app, closer to the
  // reference site's editorial, unhurried motion.
  gsap.defaults({ ease: 'power3.out', duration: 0.9 })

  // Fast start, long unhurried settle — used for the boot-loader counter.
  CustomEase.create('load', '0.53, 0, 0, 1')

  return {
    provide: {
      gsap,
      ScrollTrigger,
      SplitText,
    },
  }
})
