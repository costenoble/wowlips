<script setup lang="ts">
useHead({ title: 'Mentions légales — WoWLips' })
</script>

<template>
  <div class="px-5 pb-24 pt-32 md:px-10 md:pt-40">
    <div class="mb-16 md:mb-24">
      <p v-reveal class="text-label mb-6">Informations légales</p>
      <h1 v-reveal="0.05" class="text-hero max-w-3xl text-5xl md:text-7xl">Mentions légales</h1>
    </div>

    <div class="max-w-3xl space-y-16 text-ink-soft">
      <section v-reveal class="hairline border-t pt-10">
        <p class="mb-4 font-mono text-xs text-ink">01 — Éditeur du site</p>
        <p>
          Le site WoWLips est édité par <strong class="text-ink">[Raison sociale de la société]</strong>,
          [forme juridique] au capital de [montant] €, immatriculée au RCS de [ville] sous le
          numéro [SIREN/SIRET], dont le siège social est situé [adresse complète].
        </p>
        <p class="mt-3">
          Numéro de TVA intracommunautaire : [FR00 000000000] — Directeur de la publication :
          [Nom Prénom] — Contact : <a href="mailto:bonjour@wowlips.fr" class="underline underline-offset-4 hover:text-ink">bonjour@wowlips.fr</a>
        </p>
      </section>

      <section v-reveal="0.05" class="hairline border-t pt-10">
        <p class="mb-4 font-mono text-xs text-ink">02 — Hébergement</p>
        <p>
          Le site est hébergé par <strong class="text-ink">[Nom de l'hébergeur]</strong>,
          [adresse de l'hébergeur], [téléphone/contact].
        </p>
      </section>

      <section v-reveal="0.1" class="hairline border-t pt-10">
        <p class="mb-4 font-mono text-xs text-ink">03 — Propriété intellectuelle</p>
        <p>
          L'ensemble des contenus présents sur ce site (textes, visuels, logo, éléments
          graphiques, typographies) est protégé par le droit d'auteur et reste la propriété
          exclusive de WoWLips, sauf mention contraire. Toute reproduction ou représentation,
          totale ou partielle, sans autorisation préalable est interdite.
        </p>
      </section>

      <section v-reveal="0.15" class="hairline border-t pt-10">
        <p class="mb-4 font-mono text-xs text-ink">04 — Responsabilité</p>
        <p>
          WoWLips s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées
          sur ce site, mais ne peut garantir l'absence d'erreur ou d'omission. L'utilisateur
          reconnaît utiliser ces informations sous sa responsabilité exclusive.
        </p>
      </section>

      <section v-reveal="0.2" class="hairline border-t pt-10">
        <p class="mb-4 font-mono text-xs text-ink">05 — Médiation</p>
        <p>
          Conformément aux articles L.616-1 et R.616-1 du Code de la consommation, tout client
          peut recourir gratuitement au service de médiation [Nom du médiateur] dans un délai
          d'un an à compter de sa réclamation écrite, via [adresse ou site du médiateur].
        </p>
      </section>
    </div>
  </div>
</template>
