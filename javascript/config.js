/* =========================
CONFIGURAÇÃO DO SUPABASE
========================= */

// Cole aqui a URL do seu projeto Supabase
// (Project Settings > API > Project URL)
const SUPABASE_URL = "https://dvocbwecshpvcilejfvt.supabase.co";

// Cole aqui a chave "anon public"
// (Project Settings > API > Project API keys > anon public)
const SUPABASE_ANON_KEY = "sb_publishable_Og2ExD9zDpgjS5R9mvn4Pg_zNsSQ1sM";

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);
