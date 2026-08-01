## What this is
Advancer — Proof of Work (POW) is a small static site that publishes technical writing and a public record of trading calls and updates. It’s built as a simple, front-end-first dashboard that reads live content from a Supabase backend (articles, trades, and trade_updates) and exposes an admin area for authenticated edits.

### Stack
- **Language(s):** HTML, CSS, JavaScript
- **Framework / runtime:** Static site (vanilla JS) + Supabase for backend data/storage
- **Notable libraries:** @supabase/supabase-js, Google Fonts

## How it's organized
```
index.html        — Public site: loads articles and trades from Supabase and renders the UI
config.js         — Contains SUPABASE_URL and SUPABASE_ANON_KEY used by the front-end (public/anon key)
admin/            — Admin UI (login page and other admin pages such as dashboard.html)
vercel.json       — Vercel configuration for static deployment
```
How it fits together: index.html is the single-page front-end that creates a Supabase client with values from config.js, fetches rows from the `articles` and `trades` tables (and the related `trade_updates`), and renders them to the page. The admin folder contains pages that use Supabase Auth to sign in and grant access to editing/dashboard pages that update the same tables.

## How to run it
1. Clone the repo.
2. Create a Supabase project and add the expected tables and a `thumbnails` storage bucket:
   - Tables used (from the front-end): `articles`, `trades`, `trade_updates` (relation), `profile` may also be referenced by admin pages.
3. Copy your Supabase project URL and an ANON public key into a `config.js` file at the repository root with these values:

```javascript
const SUPABASE_URL = "https://your-project.supabase.co";
const SUPABASE_ANON_KEY = "your-anon-public-key";
```

4. Serve the directory locally or deploy it to Vercel/netlify. Quick local test (from the repo root):

```bash
# using Python 3 (simple static server)
python -m http.server 3000
# or using http-server (npm)
npm install -g http-server
http-server -p 3000
```

Then open http://localhost:3000 in your browser.

Admin and editing
- The admin pages use Supabase Auth (email/password) and expect the project to have users who can sign in. The front-end code checks the session and redirects to /admin/dashboard.html for authenticated admins.
- Some edit flows reference a single `ALLOWED_EMAIL` (see profile or other pages). Confirm your admin email in code or migrate that to an environment-driven check for better security.

Security note
- The ANON key in config.js is intentionally the public/anon key that the browser can use. Do NOT commit any Supabase service_role key or other server-side secrets to the repo. If you need server-side updates, use serverless functions or a secure backend.

Deployment
- This is a static site — Vercel or Netlify are good targets. Vercel will pick up the project automatically; vercel.json is present for configuration.

## Try asking
- Where are the `trades` table columns defined and what columns does the front-end expect (e.g., `id`, `ticker`, `chart_image`, `status`, `roi`, `x_post`)?
- The admin dashboard redirect expects /admin/dashboard.html — is that file present in this repo or served from another repo/environment?
- Do you want the ALLOWED_EMAIL and other small settings moved to environment variables so they aren't stored inline in client-side code?
