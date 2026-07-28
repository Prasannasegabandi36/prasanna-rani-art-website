MEHNDI PHOTO UPDATE — PRASANNA RANI ART WEBSITE

This package contains:
1. 40 optimized Mehndi photos in public/mehndi
2. A complete replacement for src/pages/Mehndi.tsx

HOW TO ADD IT

1. Extract this ZIP.
2. Open both the extracted folder and your prasanna-rani-art-website folder.
3. Copy the extracted public/mehndi folder into your website's public folder.
   If Windows asks whether to merge the folder, choose Yes.
4. Copy the extracted src/pages/Mehndi.tsx file into your website's
   src/pages folder.
5. When Windows asks whether to replace the existing Mehndi.tsx, choose Yes.

TEST

Open the VS Code terminal in your website folder and run:

npm run dev

Open http://localhost:5173/ and click Mehndi.

Then verify the production build:

npm run build

UPLOAD TO GITHUB

git add public/mehndi src/pages/Mehndi.tsx
git commit -m "Add Mehndi photos to gallery"
git push

NOTES

- The images were converted to WebP and reduced from about 75 MB to about 5 MB.
- All 40 original images are represented.
- The original uploaded ZIP has not been changed.
