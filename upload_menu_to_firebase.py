#!/usr/bin/env python3
"""
Script to upload Urban Binge menu to Firebase Firestore
"""

import json
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

# Initialize Firebase with your credentials
# Make sure you have downloaded the service account key from Firebase Console
# Go to: Project Settings > Service Accounts > Generate New Private Key

def upload_menu_to_firebase():
    """Upload menu data to Firestore"""
    
    try:
        # Initialize Firebase (using default credentials from environment)
        # If this fails, you need to set GOOGLE_APPLICATION_CREDENTIALS environment variable
        # Or initialize with a service account key file
        
        if not firebase_admin._apps:
            # Try to initialize with service account key
            try:
                cred = credentials.Certificate('serviceAccountKey.json')
                firebase_admin.initialize_app(cred)
            except FileNotFoundError:
                print("Error: serviceAccountKey.json not found")
                print("Please download it from Firebase Console:")
                print("1. Go to Project Settings > Service Accounts")
                print("2. Click 'Generate New Private Key'")
                print("3. Save it as 'serviceAccountKey.json' in this directory")
                return False
        
        # Get Firestore client
        db = firestore.client()
        
        # Read menu data from JSON file
        with open('public/Menu.json', 'r') as f:
            menu_data = json.load(f)
        
        print("Uploading menu to Firestore...")
        print(f"Restaurant: {menu_data['restaurant']['name']}")
        print(f"Menu items: {len(menu_data['menu'])} categories")
        
        # Upload to Firestore
        # Create/update document at: menuData/current
        db.collection('menuData').document('current').set(menu_data)
        
        print("✅ Menu successfully uploaded to Firestore!")
        print(f"Location: menuData/current")
        print(f"Total categories: {len(menu_data['menu'])}")
        
        # Count total items
        total_items = sum(len(category.get('items', [])) for category in menu_data['menu'])
        print(f"Total items: {total_items}")
        
        return True
        
    except Exception as e:
        print(f"❌ Error uploading menu: {str(e)}")
        return False

if __name__ == "__main__":
    success = upload_menu_to_firebase()
    exit(0 if success else 1)
