import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_API_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);
