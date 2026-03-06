# Responsive Logic Explanation for GaonKa

## Mobile-First Philosophy
The entire application was built with a "Mobile-First" strategy, meaning we started with base styles for small screens (360px+) and layered on complexity for larger screens using Tailwind's breakpoints (`md:`, `lg:`).

### Key Strategies Implemented:

1.  **Layout Shifts**:
    *   **Process Section**:
        *   *Mobile*: Stacked vertical cards. Easier to scroll with one thumb.
        *   *Desktop*: Horizontal scroll area using `overflow-x-auto` to mimic a timeline/journey.
    *   **Farmers Section**:
        *   *Mobile*: Swipeable cards (`overflow-x-auto` with `snap-x`). This provides a native app-like feel.
        *   *Desktop*: Standard 3-column grid for overview visibility.
    *   **Navbar**:
        *   *Mobile*: Hamburger menu that toggles a full-width dropdown.
        *   *Desktop*: Persistent links in a row.

2.  **Typography**:
    *   Base font sizes are set for readability on small screens (e.g., `text-xl`).
    *   `md:text-5xl` etc. are used to scale up headings significantly on desktop to fill the negative space.

3.  **Images**:
    *   Used `next/image` with the `sizes` prop.
    *   Example: `sizes="(max-width: 768px) 100vw, 33vw"` tells the browser to download a smaller version of the image for mobile devices, improving LCP (Largest Contentful Paint) and saving bandwidth.

4.  **Interaction**:
    *   **Hover States**: Only applied where sensible (mostly desktop).
    *   **Touch Targets**: Buttons (like "Order via WhatsApp") are full-width on mobile or have generous padding to accommodate finger taps (min 44px height).

5.  **Performance Optimization**:
    *   **Lazy Loading**: Most images below the fold are lazy-loaded by default in Next.js.
    *   **Reduced Animation**: Complex parallax effects are often disabled or simplified on mobile (although Framer Motion handles some of this gracefully, we ensured layout stability first).

### Breakpoints Used
*   **Default**: < 768px (Mobile)
*   **`md:`**: >= 768px (Tablet/Small Laptop)
*   **`lg:`**: >= 1024px (Desktop)
