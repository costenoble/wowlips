<script setup lang="ts">
useHead({ title: 'À propos — WoWLips' })
</script>

<template>
  <div class="px-5 pb-24 pt-32 md:px-10 md:pt-40">
    <div class="mb-20 md:mb-32">
      <p v-reveal class="text-label mb-6">À propos</p>
      <h1 v-reveal="0.05" class="text-hero max-w-4xl text-5xl leading-[0.92] md:text-7xl">
        Une maison de cosmétiques née d'une conviction simple : les lèvres méritent mieux qu'un compromis entre soin et couleur.
      </h1>
    </div>

    <div class="grid gap-10 hairline border-t py-16 md:grid-cols-2 md:gap-24 md:py-24">
      <p v-reveal class="text-label">Notre histoire</p>
      <div v-reveal="0.08" class="max-w-xl space-y-6 text-lg text-ink-soft">
        <p>
          WoWLips est née à Rennes d'un constat : la plupart des rouges à lèvres qui tiennent
          toute la journée assèchent, et la plupart des soins qui nourrissent ne durent pas.
          Nous avons voulu une troisième voie.
        </p>
        <p>
          Chaque formule est développée avec des laboratoires français, testée sur plusieurs
          mois avant sa mise en rayon, et pensée pour un geste quotidien plutôt qu'une
          occasion spéciale.
        </p>
      </div>
    </div>

    <div class="grid gap-10 hairline border-t py-16 md:grid-cols-3 md:gap-10 md:py-24">
      <div v-reveal>
        <p class="font-mono text-xs text-ink-soft">Engagement 01</p>
        <p class="mt-3 text-xl">Formulation</p>
        <p class="mt-2 text-ink-soft">
          Plus de 90% d'ingrédients d'origine naturelle, sans paraben ni silicone.
        </p>
      </div>
      <div v-reveal="0.08">
        <p class="font-mono text-xs text-ink-soft">Engagement 02</p>
        <p class="mt-3 text-xl">Fabrication</p>
        <p class="mt-2 text-ink-soft">
          Conçu et fabriqué en France, jamais testé sur les animaux.
        </p>
      </div>
      <div v-reveal="0.16">
        <p class="font-mono text-xs text-ink-soft">Engagement 03</p>
        <p class="mt-3 text-xl">Emballage</p>
        <p class="mt-2 text-ink-soft">
          Recharges disponibles sur l'ensemble de la gamme couleur d'ici 2027.
        </p>
      </div>
    </div>

    <div class="hairline border-t py-16 md:py-24">
      <p v-reveal class="text-label mb-6">Contact</p>
      <div v-reveal="0.05" class="flex flex-col gap-2 text-2xl md:flex-row md:items-baseline md:gap-8 md:text-4xl">
        <a href="mailto:bonjour@wowlips.fr" class="hover:opacity-60">bonjour@wowlips.fr</a>
        <span class="text-base text-ink-soft md:text-lg">Rennes, France</span>
      </div>
    </div>
  </div>
</template>
