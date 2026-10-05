# WoWLips — boutique cosmétique (Nuxt 4)

Projet e-commerce pour la marque **WoWLips** (cosmétiques lèvres), construit en Nuxt 4 /
TypeScript. La direction artistique (typographie XXL condensée, nav monospace, fond crème,
smooth-scroll Lenis, animations GSAP/ScrollTrigger/SplitText, curseur personnalisé, grille
asymétrique avec révélation au survol) s'inspire de l'esprit du site portfolio
[hervebaillargeon.com](https://hervebaillargeon.com) — sans en reprendre le contenu, les
textes, les visuels ni les polices propriétaires.

> ⚠️ Polices : DIN Engschrift / NB International Pro Mono / Suisse Intl sont des polices
> commerciales utilisées sous licence par le site de référence — elles ne sont pas incluses
> ici. Ce projet utilise des équivalents gratuits (Google Fonts) au look proche : **Anton**
> (grand titre condensé), **Space Mono** (nav / labels), **Inter** (texte courant). À
> remplacer librement par vos propres licences de fonte si besoin.

## Stack

- **Nuxt 4** (Vue 3, TypeScript, dossier `app/`)
- **Tailwind CSS** (`@nuxtjs/tailwindcss`) — design tokens dans `tailwind.config.ts`
- **Pinia** (`@pinia/nuxt`) — panier (`app/stores/cart.ts`)
- **GSAP** + **ScrollTrigger** + **SplitText** (100% gratuits depuis le rachat par Webflow) —
  animations de révélation et titre découpé
- **Lenis** — smooth scroll, synchronisé avec le ticker GSAP
- **@vueuse/core** — utilitaires (scroll, etc.)

## Démarrer

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # build de production
npm run preview   # prévisualiser le build
```

## Structure

```
app/
  assets/css/main.css       styles globaux, tokens curseur/hairline
  components/                SiteHeader, SiteFooter, CartDrawer, CustomCursor, ProductTile
  composables/                useProducts/useProduct (fetch API), useCartStore (via stores),
                               useSplitReveal (titres découpés), stubs useSupabase / useStripeCheckout
  layouts/default.vue         header + footer + curseur + drawer panier
  pages/
    index.vue                 accueil (hero + grille essentiels + storytelling)
    boutique/index.vue         catalogue filtrable par catégorie
    produits/[slug].vue        fiche produit (teintes, quantité, ajout panier)
    panier/index.vue           panier complet
    commande.vue                tunnel de commande (formulaire + confirmation simulée)
    a-propos/index.vue          page de marque
  plugins/
    00.gsap.client.ts          enregistrement GSAP/ScrollTrigger/SplitText (client)
    01.lenis.client.ts         init Lenis + sync ScrollTrigger
    02.reveal-directive.ts     directive v-reveal (universelle, SSR-safe)
    03.cart-hydrate.client.ts  relit le panier depuis localStorage au chargement
  stores/cart.ts               panier Pinia (persisté en localStorage)
  types/product.ts             types Product / CartLine
server/
  api/products/                GET /api/products, GET /api/products/:slug
  api/checkout/                POST /api/checkout (commande simulée)
  utils/products-data.ts       catalogue mock (8 produits) — à remplacer par Supabase
public/images/products/        visuels produits placeholder (SVG illustratifs, pas de photos)
```

## Le panier et le catalogue sont déjà « réels »

Le frontend ne parle jamais directement à un tableau en mémoire : il appelle
`GET /api/products`, `GET /api/products/:slug` et `POST /api/checkout` comme il le ferait
avec un vrai backend. Aujourd'hui ces routes lisent `server/utils/products-data.ts` ; le jour
où Supabase et Stripe sont branchés, seul le **contenu de ces handlers** change — aucune page
ni composant du dossier `app/` n'a besoin d'être modifié.

Le panier (`app/stores/cart.ts`) est un store Pinia persisté en `localStorage` — un
comportement panier-invité standard, qui continuera de fonctionner tel quel même après le
branchement de Supabase pour les comptes utilisateurs.

## Brancher Supabase

1. `npm install @supabase/supabase-js`
2. Ajouter dans `.env` : `SUPABASE_URL=...` et `SUPABASE_ANON_KEY=...` (déjà lus dans
   `nuxt.config.ts` → `runtimeConfig.public`)
3. Compléter `app/composables/useSupabase.ts` (le squelette est déjà en place)
4. Dans `server/api/products/*.get.ts`, remplacer la lecture de `products-data.ts` par une
   requête Supabase (`.from('products').select()` / `.eq('slug', slug).single()`) — la forme
   de la réponse (`Product` / `Product[]`) reste identique, donc rien à changer côté pages.

## Brancher Stripe

1. `npm install stripe` (utilisé côté serveur uniquement)
2. Ajouter `STRIPE_SECRET_KEY` (serveur) et `STRIPE_PUBLISHABLE_KEY` (déjà lu dans
   `runtimeConfig.public`)
3. Dans `server/api/checkout/index.post.ts`, remplacer la commande simulée par un vrai
   `stripe.checkout.sessions.create(...)` et renvoyer son `url`
4. Compléter `app/composables/useStripeCheckout.ts` pour rediriger vers cette URL — la page
   `app/pages/commande.vue` n'a besoin que d'appeler ce composable à la place de son
   `$fetch('/api/checkout')` actuel

Tant que ces deux intégrations ne sont pas branchées, la commande sur `/commande` crée une
confirmation **simulée** clairement annoncée comme telle à l'écran — aucun paiement réel n'est
jamais traité.

## Contenu placeholder

- **8 produits** fictifs (baumes, rouges à lèvres, gloss, huile, gommage, masque, crayon,
  coffret) dans `server/utils/products-data.ts`, prix et descriptions en français.
- **Visuels produits** : illustrations vectorielles simples générées pour ce projet (pas de
  photographie), à remplacer par de vraies photos produit dans `public/images/products/`.
- **Marque** : ton éditorial, engagements et texte de la page « À propos » sont des exemples à
  ajuster avec le vrai positionnement de WoWLips.

## Notes de design

- `.text-hero` (dans `main.css`) porte la typo condensée XXL utilisée pour les titres.
- `v-reveal` (directive globale) anime l'apparition au scroll de n'importe quel élément ;
  `v-reveal="0.15"` ajoute un délai en secondes pour créer des vagues d'apparition.
- `useSplitReveal()` découpe un titre en caractères et les fait remonter en cascade (utilisé
  sur le grand « WOWLIPS » de l'accueil).
- Le curseur personnalisé (`CustomCursor.vue`) grossit sur les liens/boutons et affiche
  « VOIR » sur les vignettes produit ; il est désactivé automatiquement sur mobile/tactile.
