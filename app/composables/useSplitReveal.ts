import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'

type SplitBy = 'chars' | 'words' | 'lines'

interface RevealOptions {
  by?: SplitBy
  stagger?: number
  delay?: number
  duration?: number
}

/**
 * Splits a heading's text and animates each piece up into place —
 * the same masked-letter entrance used for the giant name on the
 * reference site's homepage.
 */
export function useSplitReveal() {
  function reveal(el: Element | null, options: RevealOptions = {}) {
    if (!el) return null
    const { by = 'chars', stagger = 0.025, delay = 0, duration = 1.1 } = options

    const split = new SplitText(el, { type: by, mask: by })
    const targets = split[by] ?? split.chars

    gsap.set(targets, { yPercent: 130 })
    gsap.to(targets, {
      yPercent: 0,
      duration,
      delay,
      stagger,
      ease: 'power4.out',
    })

    return split
  }

  return { reveal }
}
