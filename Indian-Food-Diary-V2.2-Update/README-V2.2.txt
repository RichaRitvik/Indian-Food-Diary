INDIAN FOOD DIARY — V2.2 SMALL UI UPDATE
=========================================

What's changed
--------------
1. Diary date selector: left/right chevron buttons move one day; the centre
   shows the selected full date and opens a date picker. The extra Today
   button beside the heading has been removed.
2. Add Food unit dropdown now includes: Listed serving (database),
   Piece/number, Cup, Glass, Grams (g), Millilitres (ml).
3. Cups/glasses may be given a user-measured weight or volume (g/ml).
   If a conversion isn't in the food's listed serving, the app requests
   a reference rather than making one up.
4. 'Catalogue portion' is now called 'Listed serving (database)'.

What hasn't changed
-------------------
- The 664-food catalogue, Diary, Insights, Profile, Saved Foods, older
  saved meal combinations, completed days, backups and weight check-ins.
- The browser localStorage key: indianFoodDiary.v1.
- Your published GitHub Pages address.

IMPORTANT: Back up real food logs before updating.
-------------------------------------------------
In the CURRENT live app go to Profile > Export backup and keep the
.json file somewhere safe. Do not clear your browser's site data.

Upload to GitHub (only when you are ready)
------------------------------------------
1. Unzip this package.
2. Open https://github.com/RichaRitvik/Indian-Food-Diary
3. Add file > Upload files.
4. Upload ONLY these three files at the repository root:
   - index.html
   - app.js
   - redesign.css
   Replace older copies when prompted; do not delete unrelated files.
5. Commit changes (example: 'Simplify date and food units V2.2').
6. Let GitHub Pages redeploy and open
   https://richaritvik.github.io/Indian-Food-Diary/
   Refresh if your browser displays an older version.

Quick acceptance tests
----------------------
A. Diary: check the current date appears in the middle. Use chevrons,
   then tap the middle date and select another day.
B. Add Food: find Besan chilla (1 medium), choose Piece/number, enter 2,
   verify the nutritional preview doubles.
C. Add Food: find Lauki sabzi (1 cup), choose Cup, enter 2,
   verify the values double.
D. Add Food: find Paneer (100 g), choose Grams, enter 120,
   verify 1.2x the 100-g nutrition values.
E. Paneer (100 g) with Cup: enter a measured cup size such as 120 g.
   Verify the nutrition preview computes 1.2 listed servings.
F. Confirm existing entries and Saved Foods are unchanged.

Understanding measurements
--------------------------
'Listed serving' means the base serving used by the database (for example,
'Besan chilla (1 medium)' or 'Paneer (100 g)'). One listing is not a
universal 100 g amount.

A cup/glass can have different measured weights or volumes depending on
its size, the food and its density. The app does NOT assume that 1 cup
always equals 240 g, or that 1 glass always equals 250 ml. If a listed
food already says '(1 cup)' or '(1 glass)', the relative cup/glass count
scales that listed serving. For exact gram/ml conversions the user must
supply a measured reference when the catalogue doesn't have one.

Health caveat
-------------
Nutrition values in the catalogue are estimates. Household and user-entered
measurements may be approximate. This app is not medical advice.

Data safety
-----------
Website file updates alone do not clear localStorage, but using a different
browser, a new device, or clearing site data can lose local diary entries.
Export backup as JSON before testing restore or changing devices.
