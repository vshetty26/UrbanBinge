#!/usr/bin/env node

/**
 * Script to upload Urban Binge menu to Firebase Firestore
 * 
 * Usage:
 * 1. Install Firebase Admin SDK: npm install firebase-admin
 * 2. Download service account key from Firebase Console
 * 3. Set GOOGLE_APPLICATION_CREDENTIALS environment variable
 * 4. Run: node upload-menu.js
 */

const admin = require('firebase-admin');
const fs = require('fs');
const path = require('path');

async function uploadMenuToFirebase() {
  try {
    // Initialize Firebase Admin SDK
    if (!admin.apps.length) {
      // Try to initialize with service account key
      const serviceAccountPath = process.env.GOOGLE_APPLICATION_CREDENTIALS || './serviceAccountKey.json';
      
      if (!fs.existsSync(serviceAccountPath)) {
        console.error('❌ Error: Service account key not found');
        console.error('Please download it from Firebase Console:');
        console.error('1. Go to Project Settings > Service Accounts');
        console.error('2. Click "Generate New Private Key"');
        console.error('3. Save it as "serviceAccountKey.json" in this directory');
        console.error('Or set GOOGLE_APPLICATION_CREDENTIALS environment variable');
        return false;
      }
      
      const serviceAccount = require(path.resolve(serviceAccountPath));
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
      });
    }
    
    // Get Firestore instance
    const db = admin.firestore();
    
    // Read menu data
    const menuData = JSON.parse(fs.readFileSync('./public/Menu.json', 'utf8'));
    
    console.log('📤 Uploading menu to Firestore...');
    console.log(`Restaurant: ${menuData.restaurant.name}`);
    console.log(`Menu categories: ${menuData.menu.length}`);
    
    // Upload to Firestore
    await db.collection('menuData').doc('current').set(menuData);
    
    console.log('✅ Menu successfully uploaded to Firestore!');
    console.log('Location: menuData/current');
    
    // Count total items
    const totalItems = menuData.menu.reduce((sum, category) => {
      return sum + (category.items ? category.items.length : 0);
    }, 0);
    
    console.log(`Total items: ${totalItems}`);
    console.log(`\n✨ Your Urban Binge menu is now live on Firebase!`);
    
    return true;
    
  } catch (error) {
    console.error('❌ Error uploading menu:', error.message);
    return false;
  }
}

// Run the upload
uploadMenuToFirebase().then(success => {
  process.exit(success ? 0 : 1);
});
