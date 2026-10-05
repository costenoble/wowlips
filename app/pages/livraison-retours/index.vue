<script setup lang="ts">
useHead({ title: 'Livraison & retours — WoWLips' })
</script>

<template>
  <div class="px-5 pb-24 pt-32 md:px-10 md:pt-40">
    <div class="mb-16 md:mb-24">
      <p v-reveal class="text-label mb-6">Après l'achat</p>
      <h1 v-reveal="0.05" class="text-hero max-w-3xl text-5xl md:text-7xl">
        Livraison &amp; retours
      </h1>
    </div>

    <div class="max-w-3xl space-y-16 text-ink-soft">
      <section v-reveal class="hairline border-t pt-10">
        <p class="mb-4 font-mono text-xs text-ink">01 — Délais et zones</p>
        <p>
          Les commandes sont préparées sous 24 à 48h ouvrées, puis livrées en France
          métropolitaine sous 2 à 4 jours ouvrés. La livraison en Europe et hors Europe est
          possible sur demande, avec des délais variables selon la destination.
        </p>
      </section>

      <section v-reveal="0.05" class="hairline border-t pt-10">
        <p class="mb-4 font-mono text-xs text-ink">02 — Frais de port</p>
        <p>
          La livraison standard est offerte dès [montant] € d'achat. En dessous de ce seuil,
          une participation forfaitaire de [montant] € est appliquée au moment du paiement.
        </p>
      </section>

      <section v-reveal="0.1" class="hairline border-t pt-10">
        <p class="mb-4 font-mono text-xs text-ink">03 — Suivi de commande</p>
        <p>
          Un numéro de suivi est communiqué par e-mail dès l'expédition du colis, permettant de
          suivre son acheminement jusqu'à la livraison.
        </p>
      </section>

      <section v-reveal="0.15" class="hairline border-t pt-10">
        <p class="mb-4 font-mono text-xs text-ink">04 — Retours</p>
        <p>
          Vous disposez de 14 jours à compter de la réception pour nous retourner un produit
          non ouvert, dans son emballage d'origine — conformément à notre
          <NuxtLink to="/cgv" class="underline underline-offset-4 hover:text-ink">droit de rétractation</NuxtLink>.
          Contactez-nous à <a href="mailto:bonjour@wowlips.fr" class="underline underline-offset-4 hover:text-ink">bonjour@wowlips.fr</a>
          pour initier un retour.
        </p>
      </section>

      <section v-reveal="0.2" class="hairline border-t pt-10">
        <p class="mb-4 font-mono text-xs text-ink">05 — Remboursement</p>
        <p>
          Le remboursement est effectué sur le moyen de paiement utilisé lors de la commande,
          dans un délai de 14 jours à compter de la réception du produit retourné.
        </p>
      </section>
    </div>
  </div>
</template>
