import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ynotpqecqigpbevmcqto.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlub3RwcWVjcWlncGJldm1jcXRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg5Nzk1MDEsImV4cCI6MjA4NDU1NTUwMX0.GUqlkensHiCgIhbk3VsIR-v0PgOZGo6sL6qe8Hj2zjs'

export const supabase = createClient(supabaseUrl, supabaseKey)