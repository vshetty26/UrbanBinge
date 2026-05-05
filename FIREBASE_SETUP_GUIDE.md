# Firebase Setup Guide for Urban Binge

This guide walks you through setting up Firebase for the Urban Binge restaurant website.

## Why Firebase?

Firebase provides:
- **Real-time Database**: Update menu without redeploying
- **Firestore**: Scalable NoSQL database
- **Authentication**: User login (for future features)
- **Hosting**: Optional deployment option
- **Analytics**: Track user behavior

## Step 1: Create Firebase Project

### 1.1 Go to Firebase Console
- Visit [Firebase Console](https://console.firebase.google.com)
- Sign in with your Google account (create one if needed)

### 1.2 Create New Project
- Click "Add project"
- Project name: `urban-binge` (or your preferred name)
- Click "Continue"

### 1.3 Configure Project
- Enable Google Analytics: **Optional** (you can skip this)
- Click "Create project"
- Wait for project to be created (1-2 minutes)

## Step 2: Create Web App

### 2.1 Add Web App
- In Firebase Console, click the Web icon `</>`
- App nickname: `urban-binge-web`
- Check "Also set up Firebase Hosting" (optional)
- Click "Register app"

### 2.2 Copy Firebase Config
You'll see a config object like this:
```javascript
const firebaseConfig = {
  apiKey: "AIzaSyD...",
  authDomain: "urban-binge-xxx.firebaseapp.com",
  projectId: "urban-binge-xxx",
  storageBucket: "urban-binge-xxx.firebasestorage.app",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123def456",
  measurementId: "G-XXXXXXXXXX"
};
```

**Save this config - you'll need it next!**

## Step 3: Set Up Environment Variables

### 3.1 Create `.env.local` File
In your project root directory, create a file named `.env.local`:

```bash
# In terminal, from project root:
touch .env.local
```

### 3.2 Add Firebase Credentials
Open `.env.local` and add:

```
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id_here
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id_here
```

Replace `your_xxx_here` with values from your Firebase config.

### 3.3 Example
```
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyD1234567890abcdefghijklmnopqrst
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=urban-binge-abc123.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=urban-binge-abc123
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=urban-binge-abc123.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789012
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789012:web:abc123def456ghi789
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-ABC123DEF45
```

## Step 4: Set Up Firestore Database

### 4.1 Create Firestore Database
- In Firebase Console, go to **Firestore Database** (left sidebar)
- Click "Create database"
- Choose location: Select closest to your users (e.g., `asia-south1` for India)
- Click "Next"

### 4.2 Security Rules
- Select "Start in test mode" (for development)
- Click "Create"
- **Note**: Test mode allows anyone to read/write. For production, update security rules.

### 4.3 Create Collection
- Click "Start collection"
- Collection ID: `menuData`
- Click "Next"

### 4.4 Create Document
- Document ID: `current`
- Click "Save"

### 4.5 Add Menu Data
- Click on the `current` document
- Click "Add field"
- Add the entire menu JSON from `public/Menu.json`

**Option A: Manual Entry**
1. Click "Add field"
2. Field name: `restaurant`
3. Type: Map
4. Add nested fields for name, address, etc.
5. Repeat for `menu` field

**Option B: Import JSON (Easier)**
1. Export the document as JSON
2. Use Firebase CLI to import

**Option C: Use Firebase Console UI**
1. Click "Add field"
2. Paste JSON structure manually

## Step 5: Test Firebase Connection

### 5.1 Run Development Server
```bash
npm run dev
```

### 5.2 Check Console
- Open browser DevTools (F12)
- Go to Console tab
- Look for Firebase connection messages
- Should see menu loading from Firebase

### 5.3 Verify Menu Loads
- Visit http://localhost:3000/menu
- Check if menu items display
- If Firebase fails, should fallback to `public/Menu.json`

## Step 6: Update Security Rules (Important!)

### 6.1 Go to Firestore Rules
- In Firebase Console, go to **Firestore Database**
- Click "Rules" tab

### 6.2 Update Rules for Production
Replace the default rules with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow anyone to read menu
    match /menuData/{document=**} {
      allow read: if true;
      allow write: if false; // Only admin can write
    }
    
    // Allow authenticated users to read/write orders
    match /orders/{document=**} {
      allow read, write: if request.auth != null;
    }
    
    // Allow anyone to create contacts
    match /contacts/{document=**} {
      allow create: if true;
      allow read, write: if false;
    }
  }
}
```

### 6.3 Publish Rules
- Click "Publish"
- Confirm changes

## Step 7: Environment Variables for Production

### 7.1 For Vercel Deployment
1. Go to [Vercel Dashboard](https://vercel.com)
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add all Firebase variables:
   - `NEXT_PUBLIC_FIREBASE_API_KEY`
   - `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
   - `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
   - `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
   - `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
   - `NEXT_PUBLIC_FIREBASE_APP_ID`
   - `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID`
5. Click "Save"
6. Redeploy project

## Step 8: Verify Everything Works

### 8.1 Local Testing
```bash
npm run dev
# Visit http://localhost:3000
# Check menu loads
# Check cart works
# Check contact form works
```

### 8.2 Production Testing
- Deploy to Vercel
- Visit production URL
- Verify menu loads from Firebase
- Test all functionality

## Troubleshooting

### Menu Not Loading?

**Check 1: Firebase Credentials**
```bash
# Verify .env.local has correct values
cat .env.local
```

**Check 2: Firestore Database**
- Go to Firebase Console
- Check Firestore Database exists
- Check `menuData/current` document exists
- Check document has data

**Check 3: Browser Console**
- Open DevTools (F12)
- Check Console tab for errors
- Look for Firebase error messages

**Check 4: Fallback**
- If Firebase fails, app should use `public/Menu.json`
- Check if `public/Menu.json` exists and is valid JSON

### Firebase Connection Error?

**Solution 1: Check Credentials**
- Verify all environment variables are correct
- No extra spaces or quotes

**Solution 2: Check Security Rules**
- Go to Firestore Rules
- Ensure `menuData` collection allows read access

**Solution 3: Check Network**
- Open DevTools Network tab
- Look for Firebase API calls
- Check if requests are being blocked

### Firestore Quota Exceeded?

**Solution:**
- Firebase has free tier limits
- Check Firebase Console for usage
- Upgrade plan if needed
- Or optimize queries

## Firebase Pricing

### Free Tier (Spark Plan)
- 1 GB storage
- 50,000 reads/day
- 20,000 writes/day
- Good for development and small projects

### Paid Tier (Blaze Plan)
- Pay as you go
- Higher limits
- Better for production

## Best Practices

### 1. Security
- Never commit `.env.local` to Git
- Add `.env.local` to `.gitignore`
- Use strong security rules
- Rotate credentials regularly

### 2. Performance
- Index frequently queried fields
- Limit document size
- Use pagination for large datasets
- Cache data when possible

### 3. Monitoring
- Monitor Firebase usage in console
- Set up billing alerts
- Review security rules regularly
- Check error logs

### 4. Backup
- Export Firestore data regularly
- Keep backup of `public/Menu.json`
- Document all changes

## Useful Firebase Links

- [Firebase Console](https://console.firebase.google.com)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Firestore Documentation](https://firebase.google.com/docs/firestore)
- [Firebase Pricing](https://firebase.google.com/pricing)
- [Firebase Security Rules](https://firebase.google.com/docs/firestore/security/start)

## Next Steps

1. ✅ Create Firebase project
2. ✅ Create web app
3. ✅ Set up Firestore database
4. ✅ Add environment variables
5. ✅ Test locally
6. ✅ Deploy to Vercel
7. ✅ Update security rules
8. ✅ Monitor in production

## Support

If you encounter issues:
1. Check Firebase Console for errors
2. Review browser console (F12)
3. Check Firestore security rules
4. Verify environment variables
5. Check Firebase documentation
6. Contact Firebase support

---

**Firebase Setup Complete!** 🎉

Your Urban Binge website is now connected to Firebase and ready to manage menu data dynamically.
