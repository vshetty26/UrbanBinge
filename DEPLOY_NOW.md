# 🚀 Urban Binge - Deploy Now!

Your website is ready to deploy! Follow these steps to get it live.

## ✅ What's Already Done

- ✅ Menu created with 150+ items
- ✅ Firebase credentials configured
- ✅ All components updated with Urban Binge branding
- ✅ Specialties updated
- ✅ Features updated
- ✅ Testimonials updated
- ✅ Owner section updated
- ✅ Gallery updated
- ✅ Environment variables set

## 🎯 Step 1: Upload Menu to Firebase (5 minutes)

### Option A: Using Node.js (Recommended)

```bash
# Install Firebase Admin SDK
npm install firebase-admin

# Download service account key:
# 1. Go to Firebase Console: https://console.firebase.google.com
# 2. Select project: urban-binge-oms
# 3. Go to Project Settings > Service Accounts
# 4. Click "Generate New Private Key"
# 5. Save as "serviceAccountKey.json" in project root

# Upload menu
node upload-menu.js
```

### Option B: Using Python

```bash
# Install Firebase Admin SDK
pip install firebase-admin

# Download service account key (same as above)

# Upload menu
python3 upload_menu_to_firebase.py
```

### Option C: Manual Upload via Firebase Console

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select project: `urban-binge-oms`
3. Go to Firestore Database
4. Create collection: `menuData`
5. Create document: `current`
6. Copy entire JSON from `public/Menu.json` into the document
7. Save

## 🎯 Step 2: Test Locally (5 minutes)

```bash
# Start development server
npm run dev

# Visit http://localhost:3000
# Check menu loads at /menu
# Test search and filter
# Test cart functionality
```

## 🎯 Step 3: Deploy to Vercel (10 minutes)

### 3.1 Push to GitHub

```bash
# Initialize git (if not done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Urban Binge website - ready to deploy"

# Add remote (replace with your GitHub repo URL)
git remote add origin https://github.com/YOUR_USERNAME/urban-binge.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3.2 Deploy on Vercel

1. Go to [Vercel](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New..." > "Project"
4. Select your `urban-binge` repository
5. Click "Import"
6. Add Environment Variables:
   - `NEXT_PUBLIC_FIREBASE_API_KEY` = `AIzaSyDYVCLIRts_LRu5ls1jb7afJOJ3HF_RMSs`
   - `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` = `urban-binge-oms.firebaseapp.com`
   - `NEXT_PUBLIC_FIREBASE_PROJECT_ID` = `urban-binge-oms`
   - `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` = `urban-binge-oms.firebasestorage.app`
   - `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` = `67075323430`
   - `NEXT_PUBLIC_FIREBASE_APP_ID` = `1:67075323430:web:508d57534dbeda7da3d8e7`
   - `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID` = `G-KJERRFJZ1Z`
7. Click "Deploy"
8. Wait for deployment to complete (2-3 minutes)

### 3.3 Your Website is Live!

Vercel will give you a URL like: `https://urban-binge-xxx.vercel.app`

## 🎯 Step 4: Verify Production (5 minutes)

1. Visit your Vercel URL
2. Check home page loads
3. Check menu page at `/menu`
4. Test search functionality
5. Test filter functionality
6. Test cart
7. Test contact form

## 📋 Checklist

- [ ] Menu uploaded to Firebase
- [ ] Local testing passed
- [ ] GitHub repository created
- [ ] Code pushed to GitHub
- [ ] Vercel project created
- [ ] Environment variables added
- [ ] Deployment completed
- [ ] Production URL verified
- [ ] All functionality tested

## 🔗 Important Links

- **Firebase Console**: https://console.firebase.google.com
- **Vercel Dashboard**: https://vercel.com/dashboard
- **GitHub**: https://github.com
- **Your Production URL**: Will be provided by Vercel

## 📞 Restaurant Info

- **Name**: Urban Binge
- **Phone**: +91 79001 98888 / +91 7385554255
- **Instagram**: @urbanbingemumbai
- **Firebase Project**: urban-binge-oms

## 🆘 Troubleshooting

### Menu not loading?
- Check Firebase credentials in `.env.local`
- Verify menu was uploaded to Firestore
- Check browser console for errors

### Deployment failed?
- Check all environment variables are correct
- Verify GitHub repository is public
- Check build logs in Vercel dashboard

### Styles not showing?
- Clear browser cache
- Hard refresh (Ctrl+Shift+R)
- Check Tailwind CSS is configured

## 🎉 You're Done!

Your Urban Binge website is now live! Share the URL with your customers.

### Next Steps:
1. Monitor website performance
2. Collect customer feedback
3. Update menu items as needed
4. Add more images to gallery
5. Promote on social media

---

**Questions?** Check the documentation files or contact Urban Binge:
+91 79001 98888 / +91 7385554255

**Happy launching!** 🍽️✨
