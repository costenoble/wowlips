import type { Product } from '../../app/types/product'

/**
 * Mock catalog served through /server/api so the frontend already talks
 * to a real API boundary. Swapping this file's contents for Supabase
 * queries later requires no changes on the client — see README.md.
 *
 * Product photos (public/images/products/*.jpg) are Unsplash stock shots
 * reused across several products — some show real third-party brand
 * packaging (Faberlic, Glossier, The Ordinary), fine for this local demo
 * but to swap for real WoWLips photography before any real deployment.
 */
export const products: Product[] = [
  {
    id: 'p1',
    slug: 'baume-nutrition-intense',
    name: 'Baume Nutrition Intense',
    category: 'Baumes & Soins',
    shortDescription: 'Le geste réparateur du quotidien, en un passage.',
    description:
      "Un baume riche en beurre de karité et huile de rose musquée qui répare les lèvres gercées dès la première application. Sa texture fondante laisse un film protecteur non collant, jour après jour.",
    priceCents: 1800,
    currency: 'EUR',
    image: '/images/products/creme-agrumes.jpg',
    gallery: ['/images/products/creme-agrumes.jpg'],
    ingredients: ['Beurre de karité', 'Huile de rose musquée', 'Cire de candelilla', 'Vitamine E'],
    tags: ['bestseller', 'soin'],
    featured: true,
    stock: 42,
  },
  {
    id: 'p2',
    slug: 'rouge-veloute',
    name: 'Rouge Velouté',
    category: 'Couleur',
    shortDescription: 'Le mat qui ne dessèche jamais.',
    description:
      "Une formule mate longue tenue, portée par un complexe d'huiles nourrissantes qui préserve le confort des lèvres toute la journée. Quatre teintes, une seule tenue : impeccable.",
    priceCents: 2600,
    currency: 'EUR',
    image: '/images/products/swatches-couleur.jpg',
    gallery: ['/images/products/swatches-couleur.jpg'],
    variants: [
      { id: 'nude', label: 'Nude', hex: '#C99383' },
      { id: 'terracotta', label: 'Terracotta', hex: '#B5583C' },
      { id: 'classique', label: 'Rouge Classique', hex: '#A2222E' },
      { id: 'prune', label: 'Prune', hex: '#6B3346' },
    ],
    ingredients: ['Cire de jojoba', 'Huile de vitamine E', 'Pigments minéraux'],
    tags: ['bestseller'],
    featured: true,
    stock: 65,
  },
  {
    id: 'p3',
    slug: 'gloss-miroir',
    name: 'Gloss Miroir',
    category: 'Couleur',
    shortDescription: 'Effet verre, zéro collant.',
    description:
      'Une brillance miroir instantanée qui sublime sans jamais alourdir. La formule non collante glisse et se superpose à tous les looks.',
    priceCents: 2200,
    currency: 'EUR',
    image: '/images/products/flatlay-couleur.jpg',
    gallery: ['/images/products/flatlay-couleur.jpg'],
    variants: [
      { id: 'transparent', label: 'Transparent', hex: '#E3A9A0' },
      { id: 'rose-poudre', label: 'Rosé Poudré', hex: '#D98A96' },
    ],
    ingredients: ['Huile de coco fractionnée', 'Polymères filmogènes', 'Vitamine E'],
    featured: true,
    stock: 58,
  },
  {
    id: 'p4',
    slug: 'huile-repulpante',
    name: 'Huile Repulpante',
    category: 'Baumes & Soins',
    shortDescription: 'Volume visible, sensation immédiate.',
    description:
      "Un sérum-huile qui stimule la microcirculation pour un effet repulpant naturel. Le fini est brillant, jamais collant, avec une légère sensation tenseur.",
    priceCents: 2400,
    currency: 'EUR',
    image: '/images/products/soins-serums.jpg',
    gallery: ['/images/products/soins-serums.jpg'],
    ingredients: ['Huile de menthe poivrée', 'Huile de ricin', 'Complexe repulpant végétal'],
    stock: 37,
  },
  {
    id: 'p5',
    slug: 'gommage-douceur',
    name: 'Gommage Douceur',
    category: 'Rituel',
    shortDescription: 'Le préalable à toute couleur qui tient.',
    description:
      'Un gommage sucré aux micro-grains de sucre de canne qui élimine les peaux mortes en douceur. Les lèvres retrouvent souplesse et éclat en trente secondes.',
    priceCents: 1600,
    currency: 'EUR',
    image: '/images/products/flatlay-rituel.jpg',
    gallery: ['/images/products/flatlay-rituel.jpg'],
    ingredients: ['Sucre de canne', 'Huile d’amande douce', 'Miel'],
    stock: 50,
  },
  {
    id: 'p6',
    slug: 'masque-nuit',
    name: 'Masque de Nuit Réparateur',
    category: 'Rituel',
    shortDescription: 'On dort, il travaille.',
    description:
      'Un masque nuit en texture baume qui agit pendant le sommeil pour restaurer la barrière cutanée. Réveil garanti avec des lèvres visiblement repulpées et lissées.',
    priceCents: 2000,
    currency: 'EUR',
    image: '/images/products/creme-agrumes.jpg',
    gallery: ['/images/products/creme-agrumes.jpg'],
    ingredients: ['Beurre de cacao', 'Céramides', 'Acide hyaluronique'],
    stock: 29,
  },
  {
    id: 'p7',
    slug: 'crayon-contour',
    name: 'Crayon Contour Précision',
    category: 'Couleur',
    shortDescription: 'La base d’un maquillage qui dure.',
    description:
      "Une mine crémeuse et précise pour définir, structurer et prolonger la tenue du rouge à lèvres. Se réestompe pour un fini naturel ou net, au choix.",
    priceCents: 1400,
    currency: 'EUR',
    image: '/images/products/swatches-couleur.jpg',
    gallery: ['/images/products/swatches-couleur.jpg'],
    variants: [
      { id: 'nude', label: 'Nude', hex: '#C99383' },
      { id: 'classique', label: 'Rouge Classique', hex: '#A2222E' },
      { id: 'prune', label: 'Prune', hex: '#6B3346' },
    ],
    ingredients: ['Cire naturelle', 'Pigments minéraux'],
    stock: 71,
  },
  {
    id: 'p8',
    slug: 'coffret-essentiels',
    name: 'Coffret Essentiels WoWLips',
    category: 'Coffrets',
    shortDescription: 'Le rituel complet, en un geste cadeau.',
    description:
      "Baume Nutrition Intense, Gommage Douceur et Rouge Velouté (teinte Nude) réunis dans un écrin prêt à offrir. Le trio pensé pour découvrir l'essentiel de la routine WoWLips.",
    priceCents: 5800,
    currency: 'EUR',
    image: '/images/products/flatlay-rituel.jpg',
    gallery: ['/images/products/flatlay-rituel.jpg'],
    tags: ['coffret', 'idée cadeau'],
    featured: true,
    stock: 20,
  },
]

export function findProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}
