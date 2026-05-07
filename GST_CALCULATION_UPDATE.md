# GST Calculation Update - Real Restaurant Bill Format

## Summary
Updated the cart total calculation to apply GST like a real restaurant bill. Both CGST and SGST are now calculated separately on the subtotal, not on individual items.

## Calculation Logic

```typescript
// Calculate subtotal (sum of all items)
const cartSubtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

// Calculate CGST (2.5% on subtotal only)
const cartCGST = parseFloat((cartSubtotal * 0.025).toFixed(2));

// Calculate SGST (2.5% on subtotal only)
const cartSGST = parseFloat((cartSubtotal * 0.025).toFixed(2));

// Calculate total (subtotal + CGST + SGST, delivery fee added separately)
const cartTotal = cartSubtotal + cartCGST + cartSGST;
```

## Example Calculation

**Items in Cart:**
- Item 1: ₹100
- Item 2: ₹435

**Breakdown:**
- Subtotal: ₹535
- CGST (2.5%): ₹13.38
- SGST (2.5%): ₹13.38
- **Total (before delivery)**: ₹561.76

## Files Updated

### 1. **context/CartContext.tsx**
- Added `cartSGST` to the context type
- Updated calculation to include both CGST and SGST
- Both taxes are calculated as 2.5% of subtotal
- `cartTotal` now includes both taxes

### 2. **components/CartSidebar.tsx**
- Updated to display both CGST and SGST separately
- Shows:
  - Subtotal
  - CGST (2.5%)
  - SGST (2.5%)
  - Delivery Charges
  - Total

### 3. **app/cart/page.tsx**
- Updated order summary to display both taxes
- Shows:
  - Subtotal
  - CGST (2.5%)
  - SGST (2.5%)
  - Delivery Charges
  - Total

### 4. **lib/orders.ts**
- Added `sgst?: number` field to Order interface
- Now stores both CGST and SGST in order records

## Display Format

The cart now displays taxes exactly like a real restaurant bill:

```
Subtotal          ₹535.00
CGST (2.5%)       ₹13.38
SGST (2.5%)       ₹13.38
Delivery Charges  ₹35.00
─────────────────────────
Total             ₹596.76
```

## Verification

✅ Build completed successfully with no TypeScript errors
✅ All components properly updated to use new context values
✅ Calculation logic verified for correctness
✅ Both CGST and SGST applied only once on subtotal
