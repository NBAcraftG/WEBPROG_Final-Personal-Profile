import { createClient } from '@supabase/supabase-js'

// Get values from environment variables or use empty strings as fallback
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

// Only create client if we have valid credentials
let supabase = null

if (supabaseUrl && supabaseKey) {
  supabase = createClient(supabaseUrl, supabaseKey)
} else {
  console.warn('Supabase credentials not found. Guestbook will not work.')
}

export { supabase }