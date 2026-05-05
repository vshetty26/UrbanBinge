# Urban Binge - Copy & Paste Commands

Ready to deploy? Just copy and paste these commands!

## 🚀 Step 1: Upload Menu to Firebase

### Install Firebase Admin SDK
```bash
npm install firebase-admin
```

### Download Service Account Key
1. Go to: https://console.firebase.google.com
2. Select project: `urban-binge-oms`
3. Go to: Project Settings > Service Accounts
4. Click: "Generate New Private Key"
5. Save file as: `serviceAccountKey.json` in project root

### Upload Menu
```bash
node upload-menu.js
```

Expected output:
```
📤 Uploading menu to Firestore...
Restaurant: Urban Binge
Menu categories: 22
✅ Menu successfully uploaded to Firestore!
Location: menuData/current
Total items: 150+
```

## 🎯 Step 2: Test Locally

### Start Development Server
```bash
npm run dev
```

Visit: http://localhost:3000

Test:
- Home page
- Menu page (/menu)
- Search functionality
- Filter functionality
- Cart functionality
- Contact form

## 📤 Step 3: Push to GitHub

### Initialize Git (if not done)
```bash
git init
```

### Add All Files
```bash
git add .
```

### Create Commit
```bash
git commit -m "Urban Binge website - ready to deploy"
```

### Add Remote Repository
```bash
git remote add origin https://github.com/YOUR_USERNAME/urban-binge.git
```

Replace `YOUR_USERNAME` with your GitHub username.

### Push to GitHub
```bash
git branch -M main
git push -u origin main
```

## 🚀 Step 4: Deploy to Vercel

### Option A: Using Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts and select your project.

### Option B: Manual Deployment

1. Go to: https://vercel.com
2. Sign in with GitHub
3. Click: "Add New" > "Project"
4. Select: `urban-binge` repository
5. Click: "Import"
6. Add Environment Variables:

```
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyDYVCLIRts_LRu5ls1jb7afJOJ3HF_RMSs
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=urban-binge-oms.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=urban-binge-oms
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=urban-binge-oms.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=67075323430
NEXT_PUBLIC_FIREBASE_APP_ID=1:67075323430:web:508d57534dbeda7da3d8e7
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-KJERRFJZ1Z
```

7. Click: "Deploy"
8. Wait for deployment (2-3 minutes)

## ✅ Step 5: Verify Production

### Visit Your Website
```
https://urban-binge-xxx.vercel.app
```

(Vercel will provide the exact URL)

### Test Everything
- [ ] Home page loads
- [ ] Menu page works
- [ ] Search works
- [ ] Filter works
- [ ] Cart works
- [ ] Contact form works
- [ ] Images load
- [ ] Responsive design works

## 🎉 All Done!

Your Urban Binge website is now live!

### Share Your URL
```
Your production URL: https://urban-binge-xxx.vercel.app
```

Share this with your customers!

## 📞 Quick Reference

### Firebase Project
```
Project ID: urban-binge-oms
Console: https://console.firebase.google.com
```

### Vercel Project
```
Dashboard: https://vercel.com/dashboard
```

### GitHub Repository
```
Your repo: https://github.com/YOUR_USERNAME/urban-binge
```

### Restaurant Info
```
Name: Urban Binge
Phone: +91 79001 98888 / +91 7385554255
Instagram: @urbanbingemumbai
```

## 🆘 Troubleshooting Commands

### Clear Node Modules and Reinstall
```bash
rm -rf node_modules package-lock.json
npm install
```

### Clear Next.js Cache
```bash
rm -rf .next
npm run dev
```

### Check Node Version
```bash
node --version
```

Should be v16 or higher.

### Check npm Version
```bash
npm --version
```

Should be v7 or higher.

## 📝 Useful Commands

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Run Linter
```bash
npm run lint
```

### Format Code
```bash
npm run format
```

## 🔐 Security Notes

### Never Commit These Files
```
.env.local
serviceAccountKey.json
node_modules/
.next/
```

### Add to .gitignore
```bash
echo ".env.local" >> .gitignore
echo "serviceAccountKey.json" >> .gitignore
```

## 📊 Deployment Timeline

| Step | Time | Command |
|------|------|---------|
| 1. Firebase | 5 min | `node upload-menu.js` |
| 2. Local Test | 5 min | `npm run dev` |
| 3. GitHub | 5 min | `git push origin main` |
| 4. Vercel | 10 min | Deploy via UI |
| 5. Verify | 5 min | Visit production URL |

**Total: ~30 minutes**

## 🎯 Success Checklist

- [ ] Menu uploaded to Firebase
- [ ] Local testing passed
- [ ] Code pushed to GitHub
- [ ] Deployment completed on Vercel
- [ ] Production URL verified
- [ ] All functionality tested
- [ ] Website is live!

---

**Ready?** Start with Step 1 and follow the commands above!

**Questions?** Check DEPLOY_NOW.md or contact Urban Binge: +91 79001 98888
