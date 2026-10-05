import { useCartStore } from '~/stores/cart'

export default defineNuxtPlugin(() => {
  const cart = useCartStore()
  // Deferred until after the app has mounted/hydrated — reading localStorage
  // here synchronously would race Vue's hydration (SSR always renders an
  // empty cart) and produce a mismatch on any reload with a non-empty cart.
  onNuxtReady(() => cart.hydrate())
})
