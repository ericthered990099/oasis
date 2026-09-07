# Oasis Website - Deployment Guide

Deploy the Oasis marketing website in 5 minutes.

---

## Option 1: Deploy to Vercel (Easiest)

### Step 1: Push to GitHub

```bash
cd website
git init
git add .
git commit -m "Oasis marketing website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/oasis-website.git
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to vercel.com
2. Click "Add New Project"
3. Select "Import Git Repository"
4. Select your GitHub repo
5. **Important:** Set "Root Directory" to `website/`
6. Click "Deploy"

Vercel will auto-deploy. You're live!

Your URL: `https://oasis-xxx.vercel.app`

### Step 3: Custom Domain (Optional)

1. In Vercel project settings, go to "Domains"
2. Add your domain (e.g., www.oasis-recovery.com)
3. Update DNS records (Vercel will provide instructions)
4. Done!

---

## Option 2: Deploy to Netlify

### Step 1: Push to GitHub

(same as above)

### Step 2: Deploy on Netlify

1. Go to netlify.com
2. Click "Add new site"
3. Select "Import an existing project"
4. Connect GitHub
5. Select your repo
6. Set Build directory to `website/.next`
7. Click "Deploy"

### Step 3: Custom Domain

Netlify → Domain settings → Add custom domain

---

## Option 3: Self-Hosted (Advanced)

```bash
cd website
npm run build

# Copy .next folder to your server
# Run on server:
npm start
```

---

## Post-Deployment Checklist

After deploying, update these immediately:

### 1. Update App Links

Find all instances of:
```
https://app.oasis-recovery.com
```

Replace with your actual app URL:
```
https://your-app-url.vercel.app
```

Locations:
- `/app/page.js` (landing page)
- `/components/Nav.js` (navigation)
- `/components/Footer.js` (footer)
- All page files in `/app/`

### 2. Update Contact Info

- Email: Search for `support@oasis-recovery.com` → update
- Social links in Footer.js

### 3. Test All Links

1. Homepage → all buttons should go to app
2. Features → CTA buttons
3. Pricing → "Start Free Trial" buttons
4. Contact form (setup below)
5. Footer links

### 4. Setup Contact Form

The contact form on `/app/contact/page.js` needs a backend.

**Option A: Formspree (Free)**

1. Go to formspree.io
2. Create new form
3. Add your email
4. Get form ID
5. Update `/app/contact/page.js`:

```javascript
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  {/* form fields */}
</form>
```

**Option B: Nodemailer (Self-hosted)**

Requires backend setup. For now, use Formspree.

### 5. Setup Analytics

Add Google Analytics:

1. Create GA4 property
2. Get Measurement ID (G-XXXXXX)
3. Install:

```bash
npm install @next/third-parties
```

4. Update `app/layout.js`:

```javascript
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="G-XXXXXX" />
      </body>
    </html>
  )
}
```

5. Redeploy

### 6. Setup Newsletter Signup

Newsletter form in `/app/blog/page.js` needs backend.

**Option A: Mailchimp (Free)**

1. Go to mailchimp.com
2. Create audience
3. Get audience ID
4. Update blog form to post to Mailchimp API

**Option B: Substack**

Embed Substack form directly.

For now, form is ready but doesn't send emails. Setup after launch.

### 7. SEO Setup

1. Add robots.txt:

```
# public/robots.txt
User-agent: *
Allow: /
Sitemap: https://yoursite.com/sitemap.xml
```

2. Add sitemap.xml:

```
# public/sitemap.xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yoursite.com/</loc>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://yoursite.com/features</loc>
    <priority>0.9</priority>
  </url>
  <!-- add all pages -->
</urlset>
```

3. Submit to Google Search Console
4. Monitor indexing

### 8. SSL/HTTPS

✅ Vercel handles this automatically. You're good.

---

## Monitoring After Launch

### Daily

- Check if site is loading
- Monitor Vercel analytics
- Check error logs

### Weekly

- Check Google Analytics
- Monitor form submissions
- Check social media mentions

### Monthly

- Review user behavior
- Update content if needed
- Check for broken links

---

## Scaling the Website

### Add Blog Posts

1. Create new file: `/app/blog/[slug]/page.js`
2. Add blog post content
3. Update `/app/blog/page.js` with new post
4. Redeploy

### Add Pages

1. Create folder: `/app/new-page/`
2. Create `page.js` inside
3. Add to Nav.js navigation
4. Redeploy

### Custom Features

- Forms: Formspree, Nodemailer, or AWS SES
- Newsletter: Mailchimp, Substack, or ConvertKit
- Comments: Disqus or Utteranc
- Search: Algolia

---

## Troubleshooting

### Site not loading

```bash
npm run build
npm start
```

Test locally first.

### Styles not working

Clear .next folder:
```bash
rm -rf .next
npm run build
```

### Deploy fails

Check Vercel logs:
1. Go to Vercel dashboard
2. Click "Deployments"
3. Click failed build
4. Check "Logs" tab for errors

Common issues:
- Node version mismatch
- Missing dependencies
- Wrong root directory

### Links broken

Update all app URLs to your actual domain.

---

## Performance Tips

- Images are already optimized
- CSS is minified
- JavaScript is split
- No external fonts slow things down

Check Lighthouse score:
1. Open site
2. DevTools → Lighthouse
3. Click "Analyze page load"

Target: 90+ on all metrics

---

## Maintenance

### Update Content

Just edit files and push to GitHub. Vercel auto-deploys.

### Update Design

Edit CSS in `app/globals.css` or Tailwind classes in components.

### Update Copy

Edit text directly in JSX files.

### Update Navigation

Edit `/components/Nav.js`

### Update Footer

Edit `/components/Footer.js`

---

## Launch Checklist

- [ ] Site is deployed to Vercel
- [ ] Custom domain configured (if using)
- [ ] All app links point to correct URL
- [ ] Contact form works
- [ ] Newsletter signup works (optional)
- [ ] Analytics installed
- [ ] Mobile responsive tested
- [ ] All pages load without errors
- [ ] Social media links updated
- [ ] Crisis resources accurate
- [ ] Privacy & Terms updated
- [ ] SEO sitemap submitted

**Once all checked: Go live!**

---

Done. Your marketing site is live.

Next: Drive traffic to it.
