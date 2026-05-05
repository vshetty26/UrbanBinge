# Urban Binge - Restaurant Website

A modern, responsive restaurant website for Urban Binge, a pure vegetarian restaurant in Mumbai serving authentic South Indian, Indian, and Asian cuisine.

## 🎯 Project Status

### ✅ Completed
- [x] Menu structure created with 150+ items
- [x] Menu JSON file (`public/Menu.json`) with all Urban Binge items
- [x] Hero section updated with Urban Binge branding
- [x] About section updated with Urban Binge story
- [x] Navbar updated with contact information
- [x] Layout metadata updated for SEO
- [x] Firebase configuration ready (needs credentials)
- [x] Documentation and guides created

### ⏳ To Do
- [ ] Update logo (`public/chopsticklog.png`)
- [ ] Update restaurant images (`public/images/`)
- [ ] Update Specialties component
- [ ] Update Gallery component
- [ ] Update OwnerSpeaks component
- [ ] Update Testimonials component
- [ ] Update Features component
- [ ] Set up Firebase project
- [ ] Test all functionality
- [ ] Deploy to production

## 📋 Quick Start

### 1. Clone and Install
```bash
git clone <your-repo-url>
cd urban-binge
npm install
```

### 2. Set Up Environment Variables
Create `.env.local` file:
```
NEXT_PUBLIC_FIREBASE_API_KEY=your_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

### 3. Run Development Server
```bash
npm run dev
```
Visit `http://localhost:3000`

### 4. Update Components
Follow the [COMPONENT_UPDATE_GUIDE.md](./COMPONENT_UPDATE_GUIDE.md) to update:
- Logo
- Images
- Specialties
- Gallery
- Owner information
- Testimonials
- Features

### 5. Deploy
```bash
git add .
git commit -m "Urban Binge website ready"
git push origin main
```

## 📁 Project Structure

```
urban-binge/
├── app/
│   ├── page.tsx              # Home page
│   ├── layout.tsx            # Root layout (UPDATED)
│   ├── menu/
│   │   └── page.tsx          # Menu page
│   ├── cart/
│   │   └── page.tsx          # Cart page
│   ├── orders/
│   │   └── page.tsx          # Orders page
│   ├── contact/
│   │   └── page.tsx          # Contact page
│   └── globals.css           # Global styles
│
├── components/
│   ├── Navbar.tsx            # Navigation (UPDATED)
│   ├── Hero.tsx              # Hero section (UPDATED)
│   ├── About.tsx             # About section (UPDATED)
│   ├── Specialties.tsx       # Specialties (TO UPDATE)
│   ├── Gallery.tsx           # Gallery (TO UPDATE)
│   ├── Features.tsx          # Features (TO UPDATE)
│   ├── Testimonials.tsx      # Testimonials (TO UPDATE)
│   ├── OwnerSpeaks.tsx       # Owner message (TO UPDATE)
│   ├── Footer.tsx            # Footer
│   ├── CartSidebar.tsx       # Cart sidebar
│   ├── ContactForm.tsx       # Contact form
│   ├── WhatsAppFloat.tsx     # WhatsApp button
│   ├── menu/
│   │   ├── MenuGrid.tsx      # Menu display
│   │   ├── CategoryCircles.tsx
│   │   ├── CategoryModal.tsx
│   │   ├── FilterChips.tsx
│   │   └── SearchBar.tsx
│   └── ui/
│       └── Toast.tsx         # Toast notifications
│
├── context/
│   └── CartContext.tsx       # Cart state management
│
├── lib/
│   ├── firebase.ts           # Firebase config
│   ├── menu.ts               # Menu data fetching
│   ├── contact.ts            # Contact form handling
│   ├── orders.ts             # Orders handling
│   └── status.ts             # Status utilities
│
├── public/
│   ├── Menu.json             # Menu data (UPDATED)
│   ├── chopsticklog.png      # Logo (TO UPDATE)
│   ├── owner_saju.jpg        # Owner photo (TO UPDATE)
│   └── images/               # Restaurant images (TO UPDATE)
│
├── utils/
│   └── deliveryUtils.ts      # Delivery utilities
│
├── URBAN_BINGE_SETUP.md      # Setup guide
├── MENU_REFERENCE.md         # Menu reference
├── COMPONENT_UPDATE_GUIDE.md # Component update guide
└── README_URBAN_BINGE.md     # This file
```

## 🍽️ Menu Overview

### Categories (22 total)
1. Breakfast Meal (9AM-6PM)
2. Indian Mini Meal
3. South Indian - Dosa
4. Uttapam
5. Soup and Starters
6. Indian Starters
7. Indian Mains
8. Dal Rice
9. Khichadi
10. Rice
11. Asian Mains
12. Asian Starters
13. Noodles
14. Triple Rice
15. Sides
16. Indian Breads
17. Gravies
18. Beverages
19. Hot Beverages
20. Milk Shake & Falooda
21. Desserts
22. Add-ons

### Total Items: 150+
### Price Range: ₹30 - ₹375
### All Items: 100% Vegetarian

## 🔧 Key Features

- **Responsive Design**: Works on mobile, tablet, and desktop
- **Dynamic Menu**: Loads from Firebase Firestore with JSON fallback
- **Search & Filter**: Find items by name or category
- **Shopping Cart**: Add items and manage cart
- **Order Management**: Track orders
- **Contact Form**: Customer inquiries
- **WhatsApp Integration**: Direct messaging
- **SEO Optimized**: Meta tags and structured data
- **Animations**: Smooth Framer Motion animations
- **Dark Mode Ready**: Tailwind CSS styling

## 📱 Pages

- **Home** (`/`) - Landing page with hero, about, specialties, gallery, features, testimonials, owner message
- **Menu** (`/menu`) - Full menu with search and filter
- **Cart** (`/cart`) - Shopping cart management
- **Orders** (`/orders`) - Order history and tracking
- **Contact** (`/contact`) - Contact form

## 🔐 Firebase Setup

### Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com)
2. Create new project "urban-binge"
3. Create web app
4. Copy credentials to `.env.local`

### Set Up Firestore
1. Create Firestore database
2. Create collection: `menuData`
3. Create document: `current`
4. Add menu JSON data

### Fallback
If Firebase is unavailable, the app automatically falls back to `public/Menu.json`

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Push to GitHub
git push origin main

# Go to vercel.com
# Import repository
# Add environment variables
# Deploy!
```

### Environment Variables for Production
Add these in Vercel project settings:
- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`
- `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID`

## 📞 Contact Information

- **Phone**: +91 79001 98888 / +91 7385554255
- **Instagram**: @urbanbingemumbai
- **Hours**: 9:00 AM to 11:00 PM
- **Location**: Mumbai, India
- **Cuisine**: Pure Veg | Indian | Asian

## 🎨 Branding

- **Primary Color**: Gold/Amber
- **Secondary Color**: Dark Green
- **Accent Color**: Cream/Off-white
- **Font**: Playfair Display (headings), Inter (body)
- **Logo**: Urban Binge (to be updated)

## 📚 Documentation

- [URBAN_BINGE_SETUP.md](./URBAN_BINGE_SETUP.md) - Complete setup guide
- [MENU_REFERENCE.md](./MENU_REFERENCE.md) - Full menu reference
- [COMPONENT_UPDATE_GUIDE.md](./COMPONENT_UPDATE_GUIDE.md) - Component update instructions

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Database**: Firebase Firestore
- **Icons**: React Icons
- **Image Optimization**: Next.js Image
- **Deployment**: Vercel

## 📦 Dependencies

```json
{
  "next": "^14.0.0",
  "react": "^18.0.0",
  "react-dom": "^18.0.0",
  "firebase": "^10.0.0",
  "framer-motion": "^10.0.0",
  "react-icons": "^4.0.0",
  "tailwindcss": "^3.0.0"
}
```

## 🐛 Troubleshooting

### Menu not loading?
- Check Firebase credentials in `.env.local`
- Verify Firestore database has `menuData/current` document
- Check browser console for errors
- Fallback to `public/Menu.json` should work

### Images not showing?
- Verify image paths in components
- Check images exist in `public/images/`
- Use Next.js Image component for optimization

### Styles not applying?
- Run `npm run build` to rebuild
- Clear `.next` folder: `rm -rf .next`
- Restart dev server

## 📝 License

This project is created for Urban Binge restaurant.

## 👥 Support

For questions or issues:
- Check documentation files
- Review component code comments
- Contact Urban Binge: +91 79001 98888

---

**Last Updated**: May 2026
**Status**: Ready for component updates and deployment
**Next Steps**: Update components, add images, set up Firebase, deploy!

Happy coding! 🚀
