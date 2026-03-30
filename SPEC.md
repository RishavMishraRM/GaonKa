# SPEC - Fix GaonKa Functional Issues

## 🧠 The Problem
The current production version of GaonKa has several functional regressions:
1. **Critical**: "Acquire Now" CTAs on the `/products` page do not trigger the order flow.
2. **Critical**: Product grid suffers from hydration/view-port detection lag, appearing empty on first load.
3. **High**: Navigation hash links (#story, etc.) fail to navigate back to the home page from sub-pages (like /products).
4. **Medium**: All products use the same placeholder image (`Image12_Product.png`).

## ✅ Proposed Fixes
1. **Fix CTAs**: Ensure the `onClick` handler in `ProductsPageClient.tsx` isn't obscured by parent elements or Framer Motion properties. 
2. **Fix Visibility**: Adjust `whileInView` thresholds and add immediate hydration fallback for the product grid.
3. **Fix Navigation**: Refine `Navbar.tsx` to handle cross-page hash navigation more robustly using `window.location.hash` after navigation.
4. **Asset Management**: (Advisory) Keep single image for now since no others exist, but ensure the UI handles the lack of assets gracefully.

## 🎮 Status
- [ ] Fix Navigation Issues
- [ ] Fix Product CTA Functionality
- [ ] Fix Product Visibility Lag

STATUS: PLANNING
