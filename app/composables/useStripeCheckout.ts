/**
 * Placeholder — Stripe is not wired up yet.
 *
 * The checkout page already posts the cart to POST /api/checkout,
 * which today just returns a simulated confirmation
 * (server/api/checkout/index.post.ts). When you're ready to take real
 * payments:
 *
 *   1. `npm install stripe` (server) and set STRIPE_SECRET_KEY /
 *      STRIPE_PUBLISHABLE_KEY as env vars.
 *   2. In server/api/checkout/index.post.ts, create a real Checkout
 *      Session from `body.lines` and return its `url` instead of the
 *      mock `orderId`.
 *   3. Here, redirect the browser to that URL:
 *
 *        export async function useStripeCheckout(lines: CartLine[]) {
 *          const { url } = await $fetch('/api/checkout', { method: 'POST', body: { lines } })
 *          await navigateTo(url, { external: true })
 *        }
 *
 * Nothing in app/pages/panier/index.vue or checkout.vue needs to
 * change beyond calling this composable.
 */
export async function useStripeCheckout() {
  throw new Error(
    "Stripe n'est pas encore branché sur ce projet — voir app/composables/useStripeCheckout.ts",
  )
}
