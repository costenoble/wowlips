<script setup lang="ts">
useHead({ title: 'Politique de confidentialité — WoWLips' })
</script>

<template>
  <div class="px-5 pb-24 pt-32 md:px-10 md:pt-40">
    <div class="mb-16 md:mb-24">
      <p v-reveal class="text-label mb-6">Vie privée</p>
      <h1 v-reveal="0.05" class="text-hero max-w-3xl text-5xl md:text-7xl">
        Politique de confidentialité
      </h1>
    </div>

    <div class="max-w-3xl space-y-16 text-ink-soft">
      <section v-reveal class="hairline border-t pt-10">
        <p class="mb-4 font-mono text-xs text-ink">01 — Données collectées</p>
        <p>
          Lors d'une commande ou d'une inscription à la newsletter, WoWLips collecte les
          données nécessaires au traitement de votre demande : identité, coordonnées postales,
          adresse e-mail, et historique de commandes.
        </p>
      </section>

      <section v-reveal="0.05" class="hairline border-t pt-10">
        <p class="mb-4 font-mono text-xs text-ink">02 — Finalités</p>
        <p>
          Ces données sont utilisées pour traiter vos commandes, assurer le suivi de la
          relation client, et, sous réserve de votre consentement, vous adresser notre
          newsletter. Elles ne sont jamais revendues à des tiers.
        </p>
      </section>

      <section v-reveal="0.1" class="hairline border-t pt-10">
        <p class="mb-4 font-mono text-xs text-ink">03 — Conservation</p>
        <p>
          Les données liées à une commande sont conservées pendant la durée nécessaire aux
          obligations comptables et légales. Les données newsletter sont conservées jusqu'à
          votre désinscription.
        </p>
      </section>

      <section v-reveal="0.15" class="hairline border-t pt-10">
        <p class="mb-4 font-mono text-xs text-ink">04 — Cookies</p>
        <p>
          Le site utilise des cookies strictement nécessaires à son fonctionnement (panier,
          préférences d'affichage) ainsi que, le cas échéant, des cookies de mesure d'audience
          soumis à votre consentement.
        </p>
      </section>

      <section v-reveal="0.2" class="hairline border-t pt-10">
        <p class="mb-4 font-mono text-xs text-ink">05 — Vos droits</p>
        <p>
          Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, de
          suppression et de portabilité de vos données, ainsi que d'un droit d'opposition et de
          limitation du traitement. Pour l'exercer, contactez-nous à
          <a href="mailto:bonjour@wowlips.fr" class="underline underline-offset-4 hover:text-ink">bonjour@wowlips.fr</a>.
        </p>
      </section>
    </div>
  </div>
</template>
