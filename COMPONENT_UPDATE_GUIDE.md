# Urban Binge - Component Update Guide

This guide helps you update the remaining components to match Urban Binge branding and content.

## Components to Update

### 1. components/Specialties.tsx
**Purpose**: Showcase Urban Binge's special dishes

**Current Content**: Likely shows Chopstick's specialties

**What to Update**:
- Replace with Urban Binge's signature dishes
- Suggested specialties:
  - Ghee Roast Paneer Masala Dosa (₹215)
  - Paneer Tikka Masala (₹285)
  - Korean Gochujang Rice (₹315)
  - Hariyali Butter Paneer (₹335)
  - Bangkok Peanut Wok Noodles (₹315)

**Example Structure**:
```tsx
const specialties = [
  {
    name: "Ghee Roast Paneer Masala Dosa",
    description: "Ghee-roasted crispy dosa filled with rich, spicy paneer masala",
    price: 215,
    image: "/images/dosa.jpg"
  },
  // ... more items
];
```

---

### 2. components/Gallery.tsx
**Purpose**: Display restaurant ambiance and food photos

**Current Content**: Likely shows Chopstick's restaurant images

**What to Update**:
- Replace with Urban Binge restaurant photos
- Add food photography of signature dishes
- Show restaurant interior/exterior

**Images to Add**:
- Restaurant entrance
- Dining area
- Kitchen/preparation area
- Signature dishes (Dosa, Paneer Tikka, Noodles, etc.)
- Team/staff photos

**File Locations**:
- Place images in `public/images/`
- Update image paths in Gallery component

---

### 3. components/OwnerSpeaks.tsx
**Purpose**: Personal message from restaurant owner

**Current Content**: Likely shows Chopstick's owner message

**What to Update**:
- Replace with Urban Binge owner's message
- Update owner name and photo
- Customize message about Urban Binge's vision

**Example Content**:
```
"At Urban Binge, we believe that vegetarian cuisine deserves the same respect, 
expertise, and attention to detail as any other culinary tradition. Our mission 
is to bring authentic South Indian, Indian, and Asian vegetarian dishes to 
every table in Mumbai, with premium quality ingredients and exceptional taste."
```

**Image to Update**:
- Replace `public/owner_saju.jpg` with Urban Binge owner photo
- Update image path in component

---

### 4. components/Testimonials.tsx
**Purpose**: Display customer reviews and testimonials

**Current Content**: Likely shows Chopstick's customer testimonials

**What to Update**:
- Replace with Urban Binge customer testimonials
- Update customer names and photos
- Customize review text

**Example Testimonials**:
```
{
  name: "Priya Sharma",
  role: "Regular Customer",
  text: "Urban Binge has the best dosas in Mumbai! The quality of ingredients is unmatched.",
  image: "/images/customer1.jpg"
},
{
  name: "Rajesh Patel",
  role: "Food Blogger",
  text: "Finally, a vegetarian restaurant that takes its cuisine seriously. Highly recommended!",
  image: "/images/customer2.jpg"
}
```

---

### 5. components/Features.tsx
**Purpose**: Highlight key features and benefits

**Current Content**: Likely shows Chopstick's features

**What to Update**:
- Replace with Urban Binge's unique selling points

**Suggested Features**:
1. **100% Pure Vegetarian** - All dishes are completely vegetarian
2. **Premium Ingredients** - No artificial colors, only honest quality
3. **Free Home Delivery** - Available across Mumbai
4. **Authentic Recipes** - South Indian, Indian, and Asian cuisines
5. **Premium Paneer** - Sourced from certified Punjab Sind dairy
6. **Fast Service** - Quick preparation and delivery

**Example Structure**:
```tsx
const features = [
  {
    icon: "🥬",
    title: "100% Pure Vegetarian",
    description: "All our dishes are completely vegetarian"
  },
  {
    icon: "🏆",
    title: "Premium Quality",
    description: "No artificial colors, only honest ingredients"
  },
  // ... more features
];
```

---

### 6. public/chopsticklog.png
**Purpose**: Restaurant logo

**Current Content**: Chopstick's logo

**What to Update**:
- Replace with Urban Binge logo
- Ensure logo is in PNG format with transparent background
- Recommended size: 1200x400px or similar aspect ratio

**File Path**: `public/chopsticklog.png`

---

## Step-by-Step Update Process

### Step 1: Gather Content
- [ ] Get Urban Binge logo
- [ ] Collect restaurant photos (5-10 images)
- [ ] Get owner photo and message
- [ ] Collect customer testimonials (3-5)
- [ ] Prepare specialty dish descriptions

### Step 2: Update Images
```bash
# Replace logo
cp /path/to/urban-binge-logo.png public/chopsticklog.png

# Add restaurant images
cp /path/to/images/* public/images/
```

### Step 3: Update Components
1. Open `components/Specialties.tsx`
   - Update specialty items array
   - Update image paths

2. Open `components/Gallery.tsx`
   - Update gallery images array
   - Update image paths

3. Open `components/OwnerSpeaks.tsx`
   - Update owner name
   - Update owner message
   - Update owner image path

4. Open `components/Testimonials.tsx`
   - Update testimonials array
   - Update customer names and messages
   - Update image paths

5. Open `components/Features.tsx`
   - Update features array
   - Update feature descriptions

### Step 4: Test Locally
```bash
npm run dev
# Visit http://localhost:3000
# Check all pages and components
```

### Step 5: Deploy
```bash
git add .
git commit -m "Update Urban Binge branding and content"
git push origin main
```

---

## Image Recommendations

### Logo
- Format: PNG with transparent background
- Size: 1200x400px (or maintain aspect ratio)
- Quality: High resolution (300 DPI for print)

### Restaurant Photos
- Format: JPG or PNG
- Size: 1920x1080px or larger
- Quality: High resolution
- Suggested photos:
  - Entrance/storefront
  - Dining area
  - Kitchen
  - Food close-ups
  - Team photo

### Owner Photo
- Format: JPG or PNG
- Size: 400x400px (square)
- Quality: Professional headshot
- Background: Clean, professional

### Customer Photos
- Format: JPG or PNG
- Size: 200x200px (square)
- Quality: Clear, professional
- Background: Can be casual

---

## Content Guidelines

### Specialties
- Keep descriptions concise (1-2 sentences)
- Highlight unique ingredients or preparation
- Include price
- Include image

### Testimonials
- Keep reviews authentic and specific
- Include customer name and role
- 2-3 sentences per testimonial
- Include customer photo (optional)

### Features
- Keep titles short (2-3 words)
- Keep descriptions concise (1 sentence)
- Use emojis or icons for visual appeal
- Focus on unique selling points

### Owner Message
- Keep it personal and authentic
- 2-3 paragraphs
- Focus on restaurant's mission and values
- Include owner name and title

---

## File Locations Reference

```
public/
├── chopsticklog.png          ← Replace with Urban Binge logo
├── owner_saju.jpg            ← Replace with owner photo
└── images/
    ├── IMG_20240310_*.jpg    ← Keep or replace with Urban Binge photos
    ├── kerala_fish_curry.png ← Replace with Urban Binge dishes
    ├── malabar_biryani.png   ← Replace with Urban Binge dishes
    ├── schezwan_fried_rice.png ← Replace with Urban Binge dishes
    └── tandoori_platter.png  ← Replace with Urban Binge dishes

components/
├── Specialties.tsx           ← Update content
├── Gallery.tsx               ← Update image paths
├── OwnerSpeaks.tsx          ← Update content and image
├── Testimonials.tsx         ← Update content and images
└── Features.tsx             ← Update content
```

---

## Quick Checklist

- [ ] Logo updated
- [ ] Owner photo updated
- [ ] Restaurant images added
- [ ] Specialties.tsx updated
- [ ] Gallery.tsx updated
- [ ] OwnerSpeaks.tsx updated
- [ ] Testimonials.tsx updated
- [ ] Features.tsx updated
- [ ] All image paths corrected
- [ ] Tested locally
- [ ] Deployed to production

---

## Need Help?

If you need to update any component but aren't sure how, refer to the existing component structure and follow the same pattern. Most components follow a similar structure with:
- Data array (items, testimonials, features, etc.)
- Mapping over the array to display items
- Styling with Tailwind CSS
- Animations with Framer Motion

Good luck with your Urban Binge website! 🍽️
