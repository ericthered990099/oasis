# Deploy Oasis Website to Vercel (5 minutes)

## Step 1: Initialize Git

```bash
cd /home/claude/website
git init
git add .
git commit -m "Oasis website - Soar-inspired design"
```

## Step 2: Create GitHub Repo

1. Go to https://github.com/new
2. Create repo named `oasis-website`
3. Copy the HTTPS URL from Quick setup

## Step 3: Push to GitHub

```bash
cd /home/claude/website
git remote add origin https://github.com/YOUR_USERNAME/oasis-website.git
git branch -M main
git push -u origin main
```

## Step 4: Deploy to Vercel

### Option A: Vercel CLI (fastest)

```bash
npm install -g vercel
cd /home/claude/website
vercel --prod
```

Follow prompts. Your live URL will appear.

### Option B: Vercel Dashboard

1. Go to https://vercel.com/dashboard
2. Click "Add New" → "Project"
3. Select "Import Git Repository"
4. Paste your GitHub repo URL
5. Click "Import"
6. Environment Variables: (none needed, all in code)
7. Click "Deploy"

## Step 5: Wait 2-3 minutes

Vercel will build and deploy. You'll get a URL like:
```
https://oasis-website-xxxxx.vercel.app
```

## Step 6: Update App Links

In your app code, replace `https://app.oasis-recovery.com` with actual app URL when ready.

## Step 7: Custom Domain (Optional)

1. Buy domain on Namecheap ($10-15)
2. In Vercel dashboard → Project Settings → Domains
3. Add domain → Vercel shows DNS records
4. Update DNS on Namecheap
5. DNS propagates in 5-30 mins

---

## Your Website Pages

✅ Landing: `/`
✅ Features: `/features`
✅ Pricing: `/pricing`
✅ About: `/about`
✅ Blog: `/blog`
✅ Contact: `/contact`
✅ Privacy: `/privacy`
✅ Terms: `/terms`

All mobile-responsive. All Soar-inspired design.

---

## What's Different (vs old site)

- Bold hero with italic emphasis
- Social proof upfront
- Interactive addiction type selector
- How-it-works section
- Real community stories
- Crisis support in every footer
- Modern, minimal design
- All forms + CTAs ready

---

Deploy and send me the live URL!
