import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jmmkmwqokamqmpnolitt.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImptbWttd3Fva2FtcW1wbm9saXR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQzMDM5OTIsImV4cCI6MjA2OTg3OTk5Mn0.LO8nheA9Km1TLaSM7Vk4KgYM8H9kIsKAjsJpj6ltvqE' // ambil dari dashboard Supabase

export const supabase = createClient(supabaseUrl, supabaseAnonKey)