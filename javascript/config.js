/* =========================
CONFIGURAÇÃO DO SUPABASE
========================= */

// Cole aqui a URL do seu projeto Supabase
// (Project Settings > API > Project URL)
const SUPABASE_URL = "https://dvocbwecshpvcilejfvt.supabase.co";

// Cole aqui a chave "anon public"
// (Project Settings > API > Project API keys > anon public)
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2b2Nid2Vjc2hwdmNpbGVqZnZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc2MDM3MTEsImV4cCI6MjEwMzE3OTcxMX0.kjpQorhGHsOmdg6T8CTl9cudNZ8e-LQj28DcjxrjRYM";

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);
