# 🚀 Deployment Guide - ShareeGhor E-Commerce

## Deploy to Vercel (Recommended - FREE)

### Option 1: Deploy via Vercel Dashboard (Easiest)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - ShareeGhor E-Commerce"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite settings
   - Click "Deploy"

3. **Done!** Your site will be live in 2-3 minutes at `your-project.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **For Production**
   ```bash
   vercel --prod
   ```

## Build Locally

To test the production build locally:

```bash
npm run build
npm run preview
```

## Environment Setup (Optional)

If you want to add environment variables later:

1. Create `.env` file in root
2. Add variables with `VITE_` prefix:
   ```
   VITE_API_URL=https://api.example.com
   ```
3. Access in code: `import.meta.env.VITE_API_URL`

## Custom Domain (Optional)

After deploying to Vercel:

1. Go to your project settings
2. Click "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

## Vercel Configuration

The `vercel.json` file is already configured for SPA routing:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

This ensures all routes work correctly (e.g., `/products`, `/checkout`, etc.)

## Post-Deployment Checklist

✅ Test all pages:
   - Home page
   - Products page with filters
   - Product detail pages
   - Shopping cart
   - Checkout process (all 3 steps)
   - Order success page

✅ Test responsive design:
   - Mobile view
   - Tablet view
   - Desktop view

✅ Test cart functionality:
   - Add items
   - Update quantities
   - Remove items
   - Cart persistence (refresh page)

✅ Test checkout flow:
   - Form validation
   - Order placement
   - Tracking ID generation

## Troubleshooting

**Issue: Routes show 404 on refresh**
- Solution: Make sure `vercel.json` is in the root directory

**Issue: Images not loading**
- Solution: Use external image URLs or place images in `/public` folder

**Issue: Cart not persisting**
- Solution: Check browser localStorage is enabled

## Performance Tips

- Images are loaded from Unsplash CDN (fast)
- Cart data stored in localStorage (no backend needed)
- Vite production build is optimized
- Vercel Edge Network (fast global delivery)

## Support

For issues, check:
- [Vercel Documentation](https://vercel.com/docs)
- [Vite Documentation](https://vitejs.dev/)
- [React Router Documentation](https://reactrouter.com/)

---

**Congratulations! Your e-commerce website is live! 🎉**
