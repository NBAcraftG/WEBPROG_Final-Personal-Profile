import { createClient } from '@supabase/supabase-js'

// Use Vite's environment variable syntax
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Check if variables are loaded
if (!supabaseUrl || !supabaseKey) {
  console.error('Supabase environment variables are missing!')
}

export const supabase = createClient(supabaseUrl, supabaseKey)