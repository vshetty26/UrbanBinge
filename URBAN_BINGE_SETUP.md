# Urban Binge - Project Setup Guide

## Project Overview
Urban Binge is a pure vegetarian restaurant website featuring South Indian, Indian, and Asian cuisine. This project is built on the same architecture as the Chopstick restaurant project but customized for Urban Binge's menu and branding.

## Key Information

### Restaurant Details
- **Name**: Urban Binge
- **Cuisine**: Pure Veg | Indian | Asian
- **Location**: Mumbai, India
- **Phone**: +91 79001 98888 / +91 7385554255
- **Instagram**: @urbanbingemumbai
- **Hours**: 9:00 AM to 11:00 PM
- **Special**: Free Home Deliveries

### Menu Structure
The menu is organized into the following categories (in order):
1. **Breakfast Meal** (9AM-6PM) - South Indian breakfast items
2. **Indian Mini Meal** (All Day) - Pav Bhaji and similar items
3. **South Indian** (All Day) - Dosa varieties
4. **Uttapam** (All Day) - Uttapam varieties
5. **Soup and Starters** - Indian soups and starters
6. **Indian Starters** - Paneer tikkas and vegetable starters
7. **Indian Mains** - Paneer curries and vegetable dishes
8. **Dal Rice** - Dal preparations
9. **Khichadi** - Khichadi varieties
10. **Rice** - Rice dishes and biryani
11. **Asian Mains** - Asian rice dishes
12. **Asian Starters** - Asian appetizers
13. **Noodles** - Asian noodle dishes
14. **Triple Rice** - Fusion triple rice dishes
15. **Sides** - Sides and accompaniments
16. **Indian Breads** - Breads and rotis
17. **Gravies** - Gravies and sauces
18. **Beverages** - Cold beverages
19. **Hot Beverages** - Tea and coffee
20. **Milk Shake & Falooda** - Dessert beverages
21. **Desserts** - Desserts
22. **Add-ons** - Additional items

## Firebase Configuration

### Current Setup
The project uses Firebase Firestore for dynamic menu management. The current configuration points to a test Firebase project.

### To Set Up Your Own Firebase Project:

1. **Create a Firebase Project**:
   - Go to [Firebase Console](https://console.firebase.google.com)
   - Click "Add project"
   - Name it "urban-binge" (or your preferred name)
   - Enable Google Analytics (optional)

2. **Get Your Firebase Credentials**:
   - In Firebase Console, go to Project Settings
   - Under "Your apps", click the Web icon (</>) to create a web app
   - Copy the Firebase config object

3. **Update Environment Variables**:
   Create a `.env.local` file in the project root with:
   ```
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
   ```

4. **Set Up Firestore Database**:
   - In Firebase Console, go to Firestore Database
   - Click "Create database"
   - Start in test mode (for development)
   - Create a collection named `menuData`
   - Create a document with ID `current`
   - Copy the entire menu JSON from `public/Menu.json` into this document

### Menu Data Structure
The menu is stored in `public/Menu.json` with the following structure:
```json
{
  "restaurant": {
    "name": "Urban Binge",
    "address": "Mumbai, India",
    "timings": "9:00 AM to 11:00 PM",
    "phone": "+91 79001 98888 / +91 7385554255",
    "instagram": "urbanbingemumbai",
    "cuisine": "Pure Veg | Indian | Asian",
    "notes": [...]
  },
  "menu": [
    {
      "category": "Category Name",
      "cuisine": "South Indian|Indian|Asian",
      "type": "Vegetarian",
      "section": "Section Name",
      "timing": "Timing info",
      "items": [
        {
          "name": "Item Name",
          "description": "Optional description",
          "price": 95
        }
      ]
    }
  ]
}
```

## Files Modified for Urban Binge

### Core Files Updated:
1. **public/Menu.json** - Complete menu with all Urban Binge items
2. **app/layout.tsx** - Updated metadata and branding
3. **components/Navbar.tsx** - Updated contact number
4. **components/Hero.tsx** - Updated hero section with Urban Binge branding
5. **components/About.tsx** - Updated about section for Urban Binge

### Files That Need Manual Updates:
1. **components/Specialties.tsx** - Update with Urban Binge specialties
2. **components/Gallery.tsx** - Update with Urban Binge restaurant images
3. **components/OwnerSpeaks.tsx** - Update with owner information
4. **components/Testimonials.tsx** - Update with customer testimonials
5. **components/Features.tsx** - Update with Urban Binge features
6. **public/chopsticklog.png** - Replace with Urban Binge logo

## How the Menu System Works

### Menu Loading Flow:
1. The app first tries to load menu from Firebase Firestore (`menuData/current`)
2. If Firebase fails or doesn't have data, it falls back to `public/Menu.json`
3. The menu is displayed in the `/menu` page using the MenuGrid component
4. Users can filter by category and search for items

### Menu Features:
- **Category Filtering**: Users can filter by cuisine type (South Indian, Indian, Asian)
- **Search Functionality**: Full-text search across menu items
- **Cart System**: Users can add items to cart and proceed to checkout
- **Responsive Design**: Works on mobile, tablet, and desktop

## Deployment

### To Deploy to Vercel:
1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Add environment variables in Vercel project settings
5. Deploy!

### Environment Variables for Production:
Make sure to add all `NEXT_PUBLIC_FIREBASE_*` variables in Vercel project settings.

## Contact & Support

For questions about the menu or restaurant details:
- **Phone**: +91 79001 98888 / +91 7385554255
- **Instagram**: @urbanbingemumbai

## Next Steps

1. ✅ Menu data is ready in `public/Menu.json`
2. ⏳ Set up Firebase project and update `.env.local`
3. ⏳ Update restaurant images in `public/images/`
4. ⏳ Update logo in `public/chopsticklog.png`
5. ⏳ Update component content (Specialties, Gallery, Owner, Testimonials, Features)
6. ⏳ Test all functionality locally
7. ⏳ Deploy to Vercel

## Menu Items Count
- **Total Categories**: 22
- **Total Menu Items**: 150+
- **Cuisines**: South Indian, Indian, Asian
- **All Items**: 100% Vegetarian
