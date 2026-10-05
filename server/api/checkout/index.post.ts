/**
 * POST /api/checkout
 *
 * Placeholder order endpoint. It validates the payload and returns a
 * mock confirmation so the checkout flow is fully wired end-to-end —
 * but it does NOT take payment. Wiring Stripe means replacing the body
 * below with a real `stripe.checkout.sessions.create(...)` call and
 * returning its redirect `url`; see README.md → "Brancher Stripe".
 */
export default defineEventHandler(async (event) => {
  const body = await readBody<{
    lines: { slug: string; quantity: number }[]
    email?: string
  }>(event)

  if (!body?.lines?.length) {
    throw createError({ statusCode: 400, statusMessage: 'Le panier est vide.' })
  }

  const orderId = `WOW-${Date.now().toString(36).toUpperCase()}`

  return {
    ok: true,
    orderId,
    simulated: true,
    message:
      "Commande simulée — l'intégration Stripe n'est pas encore branchée sur ce projet.",
  }
})
