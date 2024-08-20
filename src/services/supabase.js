import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://dniusxfnkbueqpymjnrr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRuaXVzeGZua2J1ZXFweW1qbnJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQxNTk4NTYsImV4cCI6MjAzOTczNTg1Nn0.bOwF-0CUCFIm7kYtAV5gfVgkEyPecZCRENF4I4j5RTU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
