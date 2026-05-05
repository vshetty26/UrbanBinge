# Urban Binge - Quick Start Guide

Get your Urban Binge website up and running in 5 minutes!

## ⚡ 5-Minute Quick Start

### Step 1: Install Dependencies (1 min)
```bash
npm install
```

### Step 2: Create Environment File (1 min)
Create `.env.local` in project root:
```
NEXT_PUBLIC_FIREBASE_API_KEY=test_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=test.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=test-project
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=test.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abc123
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-ABC123
```

### Step 3: Run Development Server (1 min)
```bash
npm run dev
```

### Step 4: Open in Browser (1 min)
Visit: http://localhost:3000

### Step 5: Check Menu (1 min)
- Click "Order Online" or go to `/menu`
- Menu should load from `public/Menu.json`
- Try searching and filtering

## ✅ What Works Now

- ✅ Home page with Urban Binge branding
- ✅ Menu page with 150+ items
- ✅ Search and filter functionality
- ✅ Shopping cart
- ✅ Contact form
- ✅ Responsive design

## ⏳ What's Next

### Immediate (Do First)
1. Set up Firebase (see `FIREBASE_SETUP_GUIDE.md`)
2. Update components (see `COMPONENT_UPDATE_GUIDE.md`)
3. Add images (see `COMPONENT_UPDATE_GUIDE.md`)

### Then
4. Test everything
5. Deploy to Vercel

## 📁 Important Files

```
public/Menu.json              ← Menu data (ready to use)
.env.local                    ← Environment variables (create this)
components/Specialties.tsx    ← Update with Urban Binge dishes
components/Gallery.tsx        ← Update with restaurant images
components/OwnerSpeaks.tsx    ← Update with owner info
components/Testimonials.tsx   ← Update with reviews
components/Features.tsx       ← Update with features
```

## 🔧 Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Format code
npm run format
```

## 🚀 Deploy to Vercel (5 minutes)

### 1. Push to GitHub
```bash
git add .
git commit -m "Urban Binge website"
git push origin main
```

### 2. Deploy on Vercel
- Go to vercel.com
- Import your GitHub repository
- Add environment variables
- Click Deploy

### 3. Done!
Your website is live!

## 📞 Contact Info

- **Phone**: +91 79001 98888 / +91 7385554255
- **Instagram**: @urbanbingemumbai

## 📚 Full Guides

- **Setup**: `URBAN_BINGE_SETUP.md`
- **Firebase**: `FIREBASE_SETUP_GUIDE.md`
- **Components**: `COMPONENT_UPDATE_GUIDE.md`
- **Checklist**: `IMPLEMENTATION_CHECKLIST.md`
- **Menu**: `MENU_REFERENCE.md`
- **Overview**: `README_URBAN_BINGE.md`

## 🎯 Next Steps

1. ✅ You're running locally
2. ⏳ Set up Firebase (optional but recommended)
3. ⏳ Update components with Urban Binge content
4. ⏳ Add restaurant images
5. ⏳ Deploy to Vercel

## 💡 Tips

- Menu loads from `public/Menu.json` by default
- Firebase is optional - app works without it
- Test on mobile before deploying
- Keep `.env.local` out of Git

## 🆘 Troubleshooting

**Port 3000 already in use?**
```bash
npm run dev -- -p 3001
```

**Dependencies not installing?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Styles not showing?**
```bash
npm run build
npm run dev
```

---

**You're all set!** 🎉

Start with the development server and explore the website. When ready, follow the full guides for Firebase setup and deployment.

Happy coding! 🍽️✨
