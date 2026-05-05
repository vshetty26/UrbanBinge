# Urban Binge - Deployment Checklist

## ✅ Pre-Deployment (Already Done)

- [x] Firebase credentials configured
- [x] Environment variables set (.env.local)
- [x] Menu created (150+ items)
- [x] All components updated
- [x] Upload scripts created
- [x] Deployment guide created

## 📋 Deployment Steps

### Step 1: Upload Menu to Firebase

- [ ] Install Firebase Admin SDK: `npm install firebase-admin`
- [ ] Download serviceAccountKey.json from Firebase Console
- [ ] Place serviceAccountKey.json in project root
- [ ] Run: `node upload-menu.js`
- [ ] Verify menu uploaded successfully
- [ ] Check Firestore database has menuData/current document

### Step 2: Test Locally

- [ ] Run: `npm run dev`
- [ ] Visit http://localhost:3000
- [ ] Check home page loads
- [ ] Check menu page at /menu
- [ ] Test search functionality
- [ ] Test filter functionality
- [ ] Test cart functionality
- [ ] Test contact form
- [ ] Check responsive design on mobile

### Step 3: Push to GitHub

- [ ] Initialize git: `git init`
- [ ] Add all files: `git add .`
- [ ] Create commit: `git commit -m "Urban Binge website ready"`
- [ ] Add remote: `git remote add origin <your-repo-url>`
- [ ] Push to GitHub: `git push -u origin main`
- [ ] Verify code on GitHub

### Step 4: Deploy to Vercel

- [ ] Go to https://vercel.com
- [ ] Sign in with GitHub
- [ ] Click "Add New" > "Project"
- [ ] Select urban-binge repository
- [ ] Click "Import"
- [ ] Add environment variables:
  - [ ] NEXT_PUBLIC_FIREBASE_API_KEY
  - [ ] NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
  - [ ] NEXT_PUBLIC_FIREBASE_PROJECT_ID
  - [ ] NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
  - [ ] NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
  - [ ] NEXT_PUBLIC_FIREBASE_APP_ID
  - [ ] NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
- [ ] Click "Deploy"
- [ ] Wait for deployment to complete

### Step 5: Verify Production

- [ ] Visit production URL
- [ ] Check home page loads
- [ ] Check menu page
- [ ] Test search functionality
- [ ] Test filter functionality
- [ ] Test cart functionality
- [ ] Test contact form
- [ ] Check responsive design
- [ ] Check all images load
- [ ] Check all text displays correctly

## 🎯 Post-Deployment

- [ ] Share production URL with team
- [ ] Share production URL on social media
- [ ] Monitor website performance
- [ ] Collect customer feedback
- [ ] Update menu items as needed
- [ ] Add more images to gallery
- [ ] Monitor Firebase usage
- [ ] Set up analytics

## 📞 Contact Information

- **Phone**: +91 79001 98888 / +91 7385554255
- **Instagram**: @urbanbingemumbai
- **Firebase Project**: urban-binge-oms

## 🔗 Important Links

- Firebase Console: https://console.firebase.google.com
- Vercel Dashboard: https://vercel.com/dashboard
- GitHub: https://github.com
- Deployment Guide: DEPLOY_NOW.md

## ⏱️ Time Estimate

- Step 1 (Firebase): 5 minutes
- Step 2 (Local Testing): 5 minutes
- Step 3 (GitHub): 5 minutes
- Step 4 (Vercel): 10 minutes
- Step 5 (Verification): 5 minutes

**Total: ~30 minutes**

## 🆘 Troubleshooting

### Menu not loading?
- [ ] Check Firebase credentials in .env.local
- [ ] Verify menu uploaded to Firestore
- [ ] Check browser console for errors
- [ ] Verify Firestore security rules allow read access

### Deployment failed?
- [ ] Check all environment variables are correct
- [ ] Verify GitHub repository is public
- [ ] Check build logs in Vercel dashboard
- [ ] Ensure all dependencies are installed

### Styles not showing?
- [ ] Clear browser cache
- [ ] Hard refresh (Ctrl+Shift+R)
- [ ] Check Tailwind CSS configuration
- [ ] Verify build completed successfully

## ✨ Success Criteria

Your deployment is successful when:
- ✅ Website loads on production URL
- ✅ Menu displays all items
- ✅ Search and filter work
- ✅ Cart functionality works
- ✅ Contact form works
- ✅ All images load
- ✅ Responsive design works
- ✅ No console errors

## 🎉 Final Notes

- Keep serviceAccountKey.json secure (don't commit to Git)
- Monitor Firebase usage to avoid exceeding free tier
- Set up billing alerts in Firebase Console
- Regularly backup menu data
- Update menu items as needed
- Collect customer feedback

---

**Ready to deploy?** Follow the steps above and your Urban Binge website will be live in 30 minutes!

**Questions?** Check DEPLOY_NOW.md or contact Urban Binge: +91 79001 98888
