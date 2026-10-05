<script setup lang="ts">
const cart = useCartStore()

if (!cart.lines.length && import.meta.client) {
  navigateTo('/boutique')
}

const form = reactive({
  email: '',
  fullName: '',
  address: '',
  city: '',
  postalCode: '',
})

const touched = reactive({
  email: false,
  fullName: false,
  address: false,
  city: false,
  postalCode: false,
})

const errors = computed(() => ({
  fullName: form.fullName.trim() ? '' : 'Le nom complet est requis.',
  email: !form.email
    ? "L'email est requis."
    : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
      ? ''
      : 'Format d\'email invalide.',
  address: form.address.trim() ? '' : "L'adresse est requise.",
  postalCode: form.postalCode.trim().length >= 4 ? '' : 'Code postal invalide.',
  city: form.city.trim() ? '' : 'La ville est requise.',
}))

const isValid = computed(() => Object.values(errors.value).every((e) => !e))

function markTouched(field: keyof typeof touched) {
  touched[field] = true
}

const submitting = ref(false)
const order = ref<{ orderId: string; message: string } | null>(null)
const submitError = ref('')

async function submitOrder() {
  ;(Object.keys(touched) as (keyof typeof touched)[]).forEach((key) => { touched[key] = true })
  if (!isValid.value) return

  submitting.value = true
  submitError.value = ''
  try {
    const result = await $fetch('/api/checkout', {
      method: 'POST',
      body: {
        email: form.email,
        lines: cart.lines.map((l) => ({ slug: l.slug, quantity: l.quantity })),
      },
    })
    order.value = result
    cart.clear()
  } catch (e) {
    submitError.value = "Une erreur est survenue — réessayez dans un instant."
  } finally {
    submitting.value = false
  }
}

useHead({ title: 'Commande — WoWLips' })
</script>

<template>
  <div class="px-5 pb-24 pt-32 md:px-10 md:pt-40">
    <h1 class="text-hero mb-14 text-6xl md:mb-20 md:text-8xl">Commande</h1>

    <div v-if="order" class="max-w-lg">
      <p class="text-label mb-3 text-accent">Commande simulée</p>
      <p class="text-2xl font-medium">Merci ! Référence {{ order.orderId }}</p>
      <p class="mt-4 text-ink-soft">{{ order.message }}</p>
      <NuxtLink to="/boutique" data-cursor="hover" class="text-label mt-8 inline-block border-b hairline pb-1">
        Continuer mes achats
      </NuxtLink>
    </div>

    <div v-else-if="cart.lines.length" class="grid gap-16 md:grid-cols-[1fr_360px]">
      <form class="space-y-8" @submit.prevent="submitOrder">
        <div>
          <p class="text-label mb-4">Livraison</p>
          <div class="grid gap-5 md:grid-cols-2">
            <div class="md:col-span-2">
              <label for="fullName" class="text-label mb-2 block text-ink-soft">Nom complet</label>
              <input
                id="fullName"
                v-model="form.fullName"
                type="text"
                class="field"
                :class="{ 'field-error': touched.fullName && errors.fullName }"
                :aria-invalid="touched.fullName && !!errors.fullName"
                aria-describedby="fullName-error"
                @blur="markTouched('fullName')"
              />
              <p v-if="touched.fullName && errors.fullName" id="fullName-error" class="mt-1.5 text-xs text-accent">
                {{ errors.fullName }}
              </p>
            </div>

            <div class="md:col-span-2">
              <label for="email" class="text-label mb-2 block text-ink-soft">Email</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                class="field"
                :class="{ 'field-error': touched.email && errors.email }"
                :aria-invalid="touched.email && !!errors.email"
                aria-describedby="email-error"
                @blur="markTouched('email')"
              />
              <p v-if="touched.email && errors.email" id="email-error" class="mt-1.5 text-xs text-accent">
                {{ errors.email }}
              </p>
            </div>

            <div class="md:col-span-2">
              <label for="address" class="text-label mb-2 block text-ink-soft">Adresse</label>
              <input
                id="address"
                v-model="form.address"
                type="text"
                class="field"
                :class="{ 'field-error': touched.address && errors.address }"
                :aria-invalid="touched.address && !!errors.address"
                aria-describedby="address-error"
                @blur="markTouched('address')"
              />
              <p v-if="touched.address && errors.address" id="address-error" class="mt-1.5 text-xs text-accent">
                {{ errors.address }}
              </p>
            </div>

            <div>
              <label for="postalCode" class="text-label mb-2 block text-ink-soft">Code postal</label>
              <input
                id="postalCode"
                v-model="form.postalCode"
                type="text"
                class="field"
                :class="{ 'field-error': touched.postalCode && errors.postalCode }"
                :aria-invalid="touched.postalCode && !!errors.postalCode"
                aria-describedby="postalCode-error"
                @blur="markTouched('postalCode')"
              />
              <p v-if="touched.postalCode && errors.postalCode" id="postalCode-error" class="mt-1.5 text-xs text-accent">
                {{ errors.postalCode }}
              </p>
            </div>

            <div>
              <label for="city" class="text-label mb-2 block text-ink-soft">Ville</label>
              <input
                id="city"
                v-model="form.city"
                type="text"
                class="field"
                :class="{ 'field-error': touched.city && errors.city }"
                :aria-invalid="touched.city && !!errors.city"
                aria-describedby="city-error"
                @blur="markTouched('city')"
              />
              <p v-if="touched.city && errors.city" id="city-error" class="mt-1.5 text-xs text-accent">
                {{ errors.city }}
              </p>
            </div>
          </div>
        </div>

        <div class="hairline border p-5">
          <p class="text-label mb-2">Paiement</p>
          <p class="text-sm text-ink-soft">
            L'intégration Stripe n'est pas encore branchée sur ce projet. Valider la commande
            crée une confirmation simulée — voir <code class="font-mono">README.md</code> pour la brancher.
          </p>
        </div>

        <button
          type="submit"
          data-cursor="hover"
          :disabled="submitting"
          class="w-full bg-ink py-4 text-center font-mono text-xs uppercase tracking-widest2 text-cream transition-opacity hover:opacity-85 disabled:opacity-50"
        >
          {{ submitting ? 'Validation…' : `Confirmer la commande (${formatPrice(cart.totalCents)})` }}
        </button>
        <p v-if="submitError" class="text-sm text-accent">{{ submitError }}</p>
      </form>

      <aside class="h-fit hairline border p-6">
        <p class="text-label mb-4">Résumé</p>
        <div
          v-for="line in cart.lines"
          :key="`${line.productId}-${line.variantId}`"
          class="flex items-center justify-between gap-3 py-2 text-sm"
        >
          <span class="text-ink-soft">{{ line.quantity }}× {{ line.name }}<template v-if="line.variantLabel"> — {{ line.variantLabel }}</template></span>
          <span class="font-mono">{{ formatPrice(line.priceCents * line.quantity) }}</span>
        </div>
        <div class="mt-4 flex items-center justify-between border-t hairline pt-4">
          <span class="text-label">Total</span>
          <span class="font-display text-2xl">{{ formatPrice(cart.totalCents) }}</span>
        </div>
      </aside>
    </div>
  </div>
</template>

<style scoped>
.field {
  @apply w-full border border-ink/15 bg-transparent px-4 py-3 text-sm transition-colors duration-200 placeholder:text-ink/40 focus:outline-none focus:ring-1 focus:ring-ink;
}
.field-error {
  @apply border-accent/60 focus:ring-accent;
}
</style>
