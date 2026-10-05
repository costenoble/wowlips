<script setup lang="ts">
// Small dot-cursor that trails the pointer and expands over interactive
// elements — the same understated cue used on the reference site's work
// thumbnails. Disabled on touch devices via CSS (see main.css).
const { $gsap } = useNuxtApp()

const cursor = ref<HTMLDivElement | null>(null)
const label = ref<HTMLSpanElement | null>(null)

let quickX: ((value: number) => void) | null = null
let quickY: ((value: number) => void) | null = null
let currentTarget: HTMLElement | null = null

function isInteractive(el: EventTarget | null): HTMLElement | null {
  if (!(el instanceof HTMLElement)) return null
  return el.closest<HTMLElement>('a, button, [data-cursor]')
}

function onMove(e: MouseEvent) {
  quickX?.(e.clientX)
  quickY?.(e.clientY)

  const target = isInteractive(e.target)
  if (target !== currentTarget) {
    currentTarget = target
    const isView = target?.dataset.cursor === 'view'
    const text = target?.dataset.cursorText ?? (isView ? 'VOIR' : '')

    if (label.value) label.value.textContent = text

    $gsap.to(cursor.value, {
      scale: target ? (text ? 3.2 : 1.8) : 1,
      duration: 0.45,
      ease: 'power3.out',
    })
    $gsap.to(label.value, {
      opacity: text ? 1 : 0,
      duration: 0.25,
    })
  }
}

function onDown() {
  $gsap.to(cursor.value, { scale: 0.75, duration: 0.2 })
}
function onUp() {
  $gsap.to(cursor.value, { scale: currentTarget ? 1.8 : 1, duration: 0.3 })
}

onMounted(() => {
  if (!cursor.value) return
  quickX = $gsap.quickTo(cursor.value, 'x', { duration: 0.15, ease: 'power3.out' })
  quickY = $gsap.quickTo(cursor.value, 'y', { duration: 0.15, ease: 'power3.out' })

  window.addEventListener('mousemove', onMove)
  window.addEventListener('mousedown', onDown)
  window.addEventListener('mouseup', onUp)
})

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', onMove)
  window.removeEventListener('mousedown', onDown)
  window.removeEventListener('mouseup', onUp)
})
</script>

<template>
  <div
    ref="cursor"
    class="pointer-events-none fixed left-0 top-0 z-[100] hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ink mix-blend-difference md:flex"
    style="width: 14px; height: 14px"
    aria-hidden="true"
  >
    <span
      ref="label"
      class="font-mono text-[8px] tracking-widest2 text-cream opacity-0"
    >{{ '' }}</span>
  </div>
</template>
