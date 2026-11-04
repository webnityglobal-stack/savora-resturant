# Savora Kitchen — Restaurant Frontend

A responsive, multi-page restaurant website built with React, Vite, React Router and reusable components.

## Pages
- Home
- Our Story
- Menu (category filters)
- Gallery
- Reservations (front-end demo form with confirmation state)
- Contact

## Run locally
1. Install Node.js (18+ recommended).
2. Open this folder in VS Code.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the local URL shown in the terminal.

## Build
Run `npm run build`. The production site will be generated in `dist/`.

## Customize
- Change restaurant name, address, phone, opening hours and email in `src/components/Footer.jsx`, `src/pages/Contact.jsx` and `src/pages/Reservations.jsx`.
- Update dishes and image IDs in `src/data.js`.
- Replace Unsplash image URLs with your own licensed restaurant photography.
- The reservation form is a UI demo only. Connect its submit handler in `src/components/ReservationForm.jsx` to your backend or booking provider to receive real bookings.
- Replace the map placeholder in `src/pages/Contact.jsx` with your Google Maps embed.

## Structure
`src/components/` contains shared UI components; `src/pages/` contains each route; `src/data.js` contains menu content and image helper; `src/styles.css` contains responsive styling.
