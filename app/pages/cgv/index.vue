<script setup lang="ts">
useHead({ title: 'Conditions générales de vente — WoWLips' })
</script>

<template>
  <div class="px-5 pb-24 pt-32 md:px-10 md:pt-40">
    <div class="mb-16 md:mb-24">
      <p v-reveal class="text-label mb-6">CGV</p>
      <h1 v-reveal="0.05" class="text-hero max-w-3xl text-5xl md:text-7xl">
        Conditions générales de vente
      </h1>
    </div>

    <div class="max-w-3xl space-y-16 text-ink-soft">
      <section v-reveal class="hairline border-t pt-10">
        <p class="mb-4 font-mono text-xs text-ink">01 — Champ d'application</p>
        <p>
          Les présentes conditions générales de vente régissent les relations contractuelles
          entre WoWLips et tout client effectuant un achat sur wowlips.fr. Toute commande
          implique l'acceptation sans réserve de ces conditions.
        </p>
      </section>

      <section v-reveal="0.05" class="hairline border-t pt-10">
        <p class="mb-4 font-mono text-xs text-ink">02 — Prix</p>
        <p>
          Les prix sont indiqués en euros, toutes taxes comprises (TTC). WoWLips se réserve le
          droit de modifier ses prix à tout moment, étant entendu que le prix figurant au
          catalogue le jour de la commande est le seul applicable au client.
        </p>
      </section>

      <section v-reveal="0.1" class="hairline border-t pt-10">
        <p class="mb-4 font-mono text-xs text-ink">03 — Commande et paiement</p>
        <p>
          La commande n'est validée qu'après confirmation du paiement intégral, réalisé par
          carte bancaire via un prestataire de paiement sécurisé. Un e-mail de confirmation est
          envoyé au client une fois la commande enregistrée.
        </p>
      </section>

      <section v-reveal="0.15" class="hairline border-t pt-10">
        <p class="mb-4 font-mono text-xs text-ink">04 — Livraison</p>
        <p>
          Les délais et zones de livraison sont détaillés sur la page
          <NuxtLink to="/livraison-retours" class="underline underline-offset-4 hover:text-ink">Livraison &amp; retours</NuxtLink>.
          WoWLips ne saurait être tenue responsable des retards imputables au transporteur.
        </p>
      </section>

      <section v-reveal="0.2" class="hairline border-t pt-10">
        <p class="mb-4 font-mono text-xs text-ink">05 — Droit de rétractation</p>
        <p>
          Conformément à l'article L.221-18 du Code de la consommation, le client dispose d'un
          délai de 14 jours à compter de la réception de sa commande pour exercer son droit de
          rétractation, sans avoir à justifier de motif. Les produits doivent être retournés
          non ouverts et dans leur emballage d'origine.
        </p>
      </section>

      <section v-reveal="0.25" class="hairline border-t pt-10">
        <p class="mb-4 font-mono text-xs text-ink">06 — Garanties</p>
        <p>
          Tous les produits WoWLips bénéficient de la garantie légale de conformité et de la
          garantie contre les vices cachés, dans les conditions prévues par les articles
          L.217-3 et suivants et 1641 et suivants du Code civil.
        </p>
      </section>

      <section v-reveal="0.3" class="hairline border-t pt-10">
        <p class="mb-4 font-mono text-xs text-ink">07 — Litiges</p>
        <p>
          Les présentes CGV sont soumises au droit français. En cas de litige, une solution
          amiable sera recherchée avant toute action judiciaire, conformément aux modalités
          décrites dans nos <NuxtLink to="/mentions-legales" class="underline underline-offset-4 hover:text-ink">mentions légales</NuxtLink>.
        </p>
      </section>
    </div>
  </div>
</template>
