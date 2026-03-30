# PLAN - Wave 1: Core Navigation & Visibility FIX

## 📋 Status
- [ ] Task 1.1: Refine Navbar.tsx to ensure cross-page hash navigation
- [ ] Task 1.2: Adjust ProductsPageClient.tsx to fix view-port detection and visibility lag
- [ ] Task 1.3: Fix `whileInView` transition to make product grid load immediately

---

<task type="auto">
<name>Fix Navbar Cross-Page Navigation</name>
<files>
- c:\Users\Rishav\Disk\Codes\GaonKa\components\Navbar.tsx
</files>
<action>
Update the `scrollToSection` function to use a `window.location.href` or a more robust `router.push` that ensures hash completion on the home page. 
Correctly handle the state when navigating from `/products` back to `/#story`. 
</action>
<verify>
Check if clicking "Our Story" from `/products` successfully reloads `/` and scrolls to the story section.
</verify>
<done>Navbar links work from all pages.</done>
</task>

<task type="auto">
<name>Fix Products Visibility Lag</name>
<files>
- c:\Users\Rishav\Disk\Codes\GaonKa\app\products\ProductsPageClient.tsx
</files>
<action>
1. Reduce the `whileInView` threshold (margin) from `-50px` to `0px` or remove it. 
2. Change wait time or use `once: false` for debugging first if needed, then finalize with a faster transition.
3. Ensure the initial state isn't just `opacity: 0` without a fallback on mount.
</action>
<verify>
Products grid loads instantly on navigations.
</verify>
<done>Product grid appears reliably and quickly.</done>
</task>

---

STATUS: PLANNED
