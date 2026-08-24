/* =========================
CONFIGURAÇÃO DO SUPABASE
========================= */

// Cole aqui a URL do seu projeto Supabase
// (Project Settings > API > Project URL)
const SUPABASE_URL = "https://dvocbwecshpvcilejfvt.supabase.co/rest/v1/";

// Cole aqui a chave "anon public"
// (Project Settings > API > Project API keys > anon public)
const SUPABASE_ANON_KEY = "sb_secret_cXxh_xWUfhgbHIdfTykeUg_Bx9FXdy5";

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);
