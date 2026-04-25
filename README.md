# Chef Time — Restaurant Website

**"Good Food, Good Mood"**
A fully responsive, Bengali-language restaurant website for **Chef Time**, located in Mymensingh, Bangladesh.

---

## 📁 File Structure

```
restaurent-page/
├── index.html          (971 lines)  — Main HTML file
├── styles.css          (2139 lines) — All styling & animations
├── script.js           (279 lines)  — Interactive functionality
├── README.md                        — This file
└── images/
    ├── chef-time-logo.png           — Navbar logo
    ├── footer-logo.png              — Footer / credit logo (RabyWeb)
    ├── hero-biryani.webp            — Hero section image
    ├── biryani-trio.webp            — Featured item
    ├── google-logo.png              — Google Reviews widget
    ├── chicken_grill_burger.jpg     — Menu item
    ├── special_pizza.jpg            — Menu item
    ├── beef_shawarma.jpg            — Menu item
    ├── chicken_fried_rice.webp      — Menu item
    ├── combo-meal.webp              — Menu item
    ├── crispy_chicken.webp          — Menu item
    ├── family_combo.webp            — Menu item
    ├── family_special_combo.webp    — Menu item
    ├── grilled_mixed_platter.webp   — Menu item
    ├── mexican_hot_pizza.webp       — Menu item
    ├── ruti-steak.webp              — Menu item
    ├── shakes_juices.webp           — Menu item
    ├── singara.webp                 — Menu item
    ├── smoothie.webp                — Menu item
    ├── thai_fried_chicken.webp      — Menu item
    └── veggie-special.webp          — Menu item
```

---

## 🏪 Restaurant Info

| Field      | Details                                                      |
|------------|--------------------------------------------------------------|
| Name       | Chef Time                                                    |
| Tagline    | Good Food, Good Mood                                         |
| Location   | 311, Maskanda Polytechnical Mor, Mymensingh                  |
| Phone 1    | 01734-940927                                                 |
| Phone 2    | 01725-528688                                                 |
| Phone 3    | 01740-557803                                                 |
| Phone 4    | 01712-129691                                                 |
| Facebook   | facebook.com/ChefTime                                        |
| Google Map | Chef Time Restaurant, Mymensingh (embedded + link)           |

---

## 🎨 Design System

### Color Palette
| Variable          | Hex       | Usage                          |
|-------------------|-----------|--------------------------------|
| `--primary-red`   | `#D4501A` | Buttons, headings, accents     |
| `--dark-red`      | `#8B2D0B` | Hover states, dark accents     |
| `--gold`          | `#C4A747` | Secondary buttons, highlights  |
| `--green`         | `#006B3F` | WhatsApp button                |
| `--light-bg`      | `#F8F0E8` | Section backgrounds            |
| `--white`         | `#FFFFFF` | Cards, navbar                  |
| `--dark-text`     | `#1A1A1A` | Body text                      |
| `--gray-text`     | `#666666` | Subtitles, placeholders        |

### Typography
- **Headlines / Bengali text**: `Baloo Da 2` (400–800 weight)
- **Body / UI text**: `Hind Siliguri` (300–700 weight)
- Both loaded via Google Fonts

### Language
- Primary language: **Bengali (বাংলা)**
- `<html lang="bn">`
- Menu item names in English, UI copy in Bengali

---

## 📄 Page Sections

1. **Navbar** — Fixed top bar with logo center, nav links left, order button + location right; hamburger menu for mobile
2. **Hero** — Full-width section with tagline "GOOD FOOD, GOOD MOOD", address, 4 phone CTAs
3. **Best Sellers** — Top ordered items (image cards with name + price)
4. **Trending** — Current month's most-ordered items (image cards)
5. **About** — Short brand story for Chef Time
6. **Food Gallery** — Image grid of food photos
7. **Full Menu** — Filterable menu list with 8 categories (see below)
8. **Google Reviews Widget** — Static star rating with Google link
9. **Contact** — Address, phones, WhatsApp button, Facebook link, embedded Google Map
10. **Footer** — Quick links, social icons, RabyWeb credit logo

---

## 🍽️ Menu Categories

| Filter Key  | Category Name       |
|-------------|---------------------|
| `setmenu`   | Set Menu            |
| `fried`     | Fried Items         |
| `burger`    | Burger Items        |
| `pasta`     | Pasta & Chawmin     |
| `pizza`     | Pizza & Shawarma    |
| `combos`    | Combos & Specials   |
| `drinks`    | Drinks              |

Menu is filterable via JavaScript (click filter buttons → show/hide category sections).

---

## ⚙️ JavaScript Features (`script.js`)

- **Cart modal** — Add items, view total, enter delivery details, submit order
- **Mobile menu toggle** — Hamburger open/close
- **Menu category filter** — Click filter buttons to show relevant category
- **Smooth scroll** — Nav links scroll to sections
- **ESC key** — Closes open modals
- **Intersection Observer** — Scroll-triggered fade-in animations
- **Order notification** — Toast-style confirmation on order submit

---

## 🚀 Deployment

Hosted on **Cloudflare Pages** (static site — no backend required).

To deploy:
1. Push all files to a GitHub repository
2. Connect repo to Cloudflare Pages
3. Set build command: *(none — static site)*
4. Set output directory: `/` (root)

---

## ✏️ Customization Guide

| What to change              | Where                                    |
|-----------------------------|------------------------------------------|
| Phone numbers               | `index.html` → hero pills + contact section |
| Address                     | `index.html` → hero subtitle + contact section |
| Facebook link               | `index.html` → contact section `href`   |
| Google Map location         | `index.html` → `<iframe src="...">`     |
| WhatsApp number             | `index.html` → `.btn-whatsapp` href     |
| Menu items / prices         | `index.html` → `.menu-list-item` blocks |
| Logo image                  | Replace `images/chef-time-logo.png`     |
| Food photos                 | Replace files in `images/` folder       |
| Primary color               | `styles.css` → `--primary-red` variable |

---

## ✅ Browser Compatibility

- Chrome / Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Microsoft Edge (latest)
- Mobile: iOS Safari, Chrome for Android

---

## 🏷️ Credits

**Designed & Developed by [GensyTech](https://gensytech.com)**
Digital Agency — Bangladesh

---

*Last updated: April 2026*
