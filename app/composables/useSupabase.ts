/**
 * Placeholder — Supabase is not wired up yet.
 *
 * When you're ready:
 *   1. `npm install @supabase/supabase-js`
 *   2. Set SUPABASE_URL / SUPABASE_ANON_KEY (already read into
 *      runtimeConfig.public in nuxt.config.ts) in a .env file.
 *   3. Replace the body below with:
 *
 *        import { createClient } from '@supabase/supabase-js'
 *        export function useSupabase() {
 *          const config = useRuntimeConfig()
 *          return createClient(config.public.supabaseUrl, config.public.supabaseAnonKey)
 *        }
 *
 *   4. Point server/utils/products-data.ts's queries (or the /api/products
 *      routes directly) at `useSupabase().from('products').select()`
 *      instead of the local mock array — the frontend composables
 *      (useProducts/useProduct) don't need to change.
 */
export function useSupabase(): never {
  throw new Error(
    'Supabase n\'est pas encore branché sur ce projet — voir app/composables/useSupabase.ts',
  )
}
