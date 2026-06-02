# TODO - Single Page Conversion

## Plan Steps
1. Extract the About-section footer out of `src/components/AboutSection.js` without changing any other About markup/styles/animations.
2. Create a new `SiteFooter` component that reuses the extracted footer markup exactly as-is.
3. Render `SiteFooter` at the bottom of the single landing page in `src/app/page.js`.
4. Remove the separate routes by deleting:
   - `src/app/projects/page.js`
   - `src/app/contact/page.js`
   - `src/app/about/page.js`
5. Verify anchor IDs and navbar smooth scrolling still work (`home/about/projects/contact`).
6. Add `scroll-margin-top` only if fixed navbar causes misalignment.
7. Run `npm run dev` and do quick manual checks for:
   - smooth scroll
   - active section highlighting
   - footer shows once at very bottom
   - About section visuals unchanged

## Progress
- [x] Extracted About footer into `SiteFooter`
- [x] Rendered global footer at bottom of `src/app/page.js`
- [x] Neutralized separate route pages for `/about`, `/projects`, `/contact`


