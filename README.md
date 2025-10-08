# Praneeth P K — Portfolio

This is a Next.js portfolio site for Praneeth P K. It includes a contact form that uses EmailJS, PWA manifest and favicon support, and Tailwind CSS.

## Quick start

1. Install dependencies:

   ```pwsh
   npm install
   ```

2. Create a local environment file `.env.local` (not committed) or rely on Vercel env vars for production.

   Example `.env.local` values (these are already present in the repo's `.env` for development):

   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_0vh816b
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_13xizrk
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=1cmtF7DL9obrDqfmw
   ```

3. Run the dev server:

   ```pwsh
   npm run dev
   ```

   Open http://localhost:9002

## EmailJS setup (Vercel)

To use EmailJS in production on Vercel, add these environment variables via the Vercel dashboard for your project:

- `NEXT_PUBLIC_EMAILJS_SERVICE_ID` = `service_0vh816b`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` = `template_13xizrk`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` = `1cmtF7DL9obrDqfmw`

These are safe to expose to the client (EmailJS is designed for client-side use). If you move email sending server-side, store secrets without the `NEXT_PUBLIC_` prefix.

## Favicon / PWA

Filenames expected under `public/`:

- `icon.png` (source)
- `icon-16.png`, `icon-32.png`, `icon-192.png`, `icon-512.png`
- `apple-touch-icon.png`
- `site.webmanifest`

If you want a `favicon.ico`, generate a multi-size ICO from the PNG assets using ImageMagick or a Node tool (instructions in the repo).

## Deploying to Vercel

1. Push to GitHub (already done).
2. Import the repo in Vercel and set the environment variables above.
3. Deploy — Vercel will build the Next.js app and serve it.

## Notes

- I removed a corrupted `favicon.ico` that was causing Turbopack/Next to fail during build. Use the provided PNGs or generate a valid `favicon.ico`.
- Sensitive keys (if any) should not be committed; use Vercel env vars instead.

---

If you want, I can add a server-side API route for sending email (more secure) and update the contact form to call it.
