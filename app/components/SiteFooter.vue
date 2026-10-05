<script setup lang="ts">
const email = ref('')
const submitted = ref(false)

function subscribe() {
  if (!email.value) return
  // No backend wired yet — see README "Brancher Supabase" for a real list.
  submitted.value = true
}
</script>

<template>
  <footer class="hairline border-t bg-cream px-5 pb-8 pt-16 md:px-10 md:pt-24">
    <div class="mx-auto max-w-[1600px]">
      <p v-reveal="{ repeat: true }" class="text-hero mb-14 text-[16vw] leading-[1] md:text-[9vw]">WOWLIPS</p>

      <div class="grid grid-cols-2 gap-10 md:grid-cols-5">
        <div v-reveal="{ delay: 0, repeat: true }">
          <p class="text-label mb-4">Boutique</p>
          <ul class="space-y-2 text-sm">
            <li><NuxtLink to="/boutique" class="hover:opacity-50">Tous les produits</NuxtLink></li>
            <li><NuxtLink to="/boutique?categorie=Couleur" class="hover:opacity-50">Couleur</NuxtLink></li>
            <li><NuxtLink to="/boutique?categorie=Baumes%20%26%20Soins" class="hover:opacity-50">Baumes &amp; soins</NuxtLink></li>
            <li><NuxtLink to="/boutique?categorie=Coffrets" class="hover:opacity-50">Coffrets</NuxtLink></li>
          </ul>
        </div>

        <div v-reveal="{ delay: 0.06, repeat: true }">
          <p class="text-label mb-4">Informations</p>
          <ul class="space-y-2 text-sm">
            <li><NuxtLink to="/a-propos" class="hover:opacity-50">À propos</NuxtLink></li>
            <li><NuxtLink to="/panier" class="hover:opacity-50">Panier</NuxtLink></li>
            <li><a href="mailto:bonjour@wowlips.fr" class="hover:opacity-50">bonjour@wowlips.fr</a></li>
          </ul>
        </div>

        <div v-reveal="{ delay: 0.12, repeat: true }">
          <p class="text-label mb-4">Légal</p>
          <ul class="space-y-2 text-sm">
            <li><NuxtLink to="/mentions-legales" class="hover:opacity-50">Mentions légales</NuxtLink></li>
            <li><NuxtLink to="/cgv" class="hover:opacity-50">CGV</NuxtLink></li>
            <li><NuxtLink to="/politique-de-confidentialite" class="hover:opacity-50">Confidentialité</NuxtLink></li>
            <li><NuxtLink to="/livraison-retours" class="hover:opacity-50">Livraison &amp; retours</NuxtLink></li>
          </ul>
        </div>

        <div v-reveal="{ delay: 0.18, repeat: true }" class="col-span-2">
          <p class="text-label mb-4">Newsletter</p>
          <form v-if="!submitted" class="flex items-end gap-3 border-b hairline pb-2" @submit.prevent="subscribe">
            <input
              v-model="email"
              type="email"
              required
              placeholder="votre@email.fr"
              class="w-full bg-transparent py-1 font-mono text-sm placeholder:text-ink/40 focus:outline-none"
            />
            <button type="submit" data-cursor="hover" class="text-label whitespace-nowrap">S'inscrire</button>
          </form>
          <p v-else class="text-sm">Merci — à très vite.</p>
        </div>
      </div>

      <div v-reveal="{ delay: 0.24, repeat: true }" class="mt-16 text-xs text-ink-soft">
        <p>© {{ new Date().getFullYear() }} WoWLips. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
</template>
