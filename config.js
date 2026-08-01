// IMPORTANT: Do NOT commit real keys to this file. Use this file only for local development.
// For deployed environments (Vercel/Netlify) inject SUPABASE_URL and SUPABASE_ANON_KEY via environment variables

const SUPABASE_URL = "<YOUR_SUPABASE_URL>"; // e.g. https://xyzcompany.supabase.co
const SUPABASE_ANON_KEY = "<YOUR_SUPABASE_ANON_KEY>"; // public anon key (browser)

// Replace the placeholders with your project's values when running locally.
// Example (local only):
// const SUPABASE_URL = "https://rhrswucounbjfsdnzhkd.supabase.co";
// const SUPABASE_ANON_KEY = "eyJ...";

// SECURITY: Never commit service_role keys to the repository. If you need server-side
// operations (signed URLs, privileged writes), implement a serverless function that
// uses the service_role key stored in environment variables on the server.
