# Bhojan Bandhu POS — Landing Page

> **India's #1 Restaurant POS Platform** — A production-ready SaaS landing page built with the MERN stack.

![Bhojan Bandhu Logo](./logo.png)

---

## 🚀 Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18 + Vite 8 |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Icons | Lucide React + React Icons |
| Backend | Node.js + Express 5 |
| Database | MongoDB + Mongoose |
| Validation | express-validator |

---

## 📁 Project Structure

```
POS-landingPage/
├── client/                     # React frontend (Vite)
│   ├── src/
│   │   ├── assets/logo.png     # Bhojan Bandhu logo
│   │   ├── components/
│   │   │   ├── Navbar.jsx      # Responsive sticky navbar
│   │   │   ├── Hero.jsx        # Hero with dashboard mockup
│   │   │   ├── Stats.jsx       # Animated counters
│   │   │   ├── Features.jsx    # 9-feature grid
│   │   │   ├── HowItWorks.jsx  # 4-step onboarding flow
│   │   │   ├── Pricing.jsx     # 3-tier pricing with toggle
│   │   │   ├── Testimonials.jsx # Carousel testimonials
│   │   │   ├── FAQ.jsx         # Accordion FAQ
│   │   │   ├── Newsletter.jsx  # Lead capture form
│   │   │   └── Footer.jsx      # Full footer
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css           # Global styles + Tailwind
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── server/                     # Express backend
│   ├── controllers/
│   │   └── newsletterController.js
│   ├── models/
│   │   └── Newsletter.js       # Mongoose schema
│   ├── routes/
│   │   └── newsletter.js
│   ├── index.js                # Express app entry
│   ├── .env                    # Environment variables
│   └── package.json
│
├── package.json                # Root (concurrently)
├── logo.png                    # Bhojan Bandhu logo
└── README.md
```

---

## ⚡ Quick Start

### Prerequisites
- Node.js v18+
- MongoDB (local or Atlas)

### 1. Install Dependencies

```bash
# Root (concurrently tool)
npm install

# Client
cd client && npm install --legacy-peer-deps

# Server
cd server && npm install
```

### 2. Configure Environment

```bash
# Edit server/.env
MONGODB_URI=mongodb://localhost:27017/bhojanbandhu
PORT=5000
NODE_ENV=development
CORS_ORIGIN=http://localhost:5174
```

### 3. Run Development Servers

```bash
# From root — runs both client (port 5174) and server (port 5000) together
npm run dev

# Or individually:
npm run dev:client    # React at http://localhost:5174
npm run dev:server    # Express at http://localhost:5000
```

---

## 🏗️ Production Build

```bash
# Build frontend
npm run build

# Start server (serves built client + API)
npm start
```

In production, the Express server serves the React build from `client/dist/` and all API routes at `/api/*`.

---

## 🌐 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/health` | Server health check |
| `POST` | `/api/newsletter` | Subscribe / capture lead |
| `GET` | `/api/newsletter` | List all leads (admin) |

### POST `/api/newsletter`

**Request Body:**
```json
{
  "name": "Rajesh Sharma",
  "email": "rajesh@example.com",
  "restaurant": "Sharma Dhaba"
}
```

**Response (201):**
```json
{
  "success": true,
  "message": "Successfully subscribed! Our team will reach out within 24 hours.",
  "id": "..."
}
```

---

## 🎨 Design Highlights

- **Color Palette**: Deep crimson red (`#B91C1C`) on dark navy (`#0F172A`)
- **Typography**: Inter (variable weight)
- **Glass Morphism**: backdrop-blur cards throughout
- **Animations**: Framer Motion scroll-triggered reveals + counter animations
- **Responsive**: Mobile-first, tested across breakpoints

---

## 📋 Landing Page Sections

1. **Navbar** — Sticky, scroll-aware, mobile menu, dark/light toggle
2. **Hero** — Dashboard mockup, floating food cards, dual CTAs
3. **Stats** — Animated counters (10K+ restaurants, 99.9% uptime, etc.)
4. **Features** — 9 feature cards with gradient icons
5. **How It Works** — 4-step process with connector line
6. **Pricing** — Monthly/yearly toggle, 3 tiers (Starter/Pro/Enterprise)
7. **Testimonials** — Sliding carousel with 5 reviews
8. **FAQ** — Smooth accordion with 8 common questions
9. **Newsletter/CTA** — Lead capture form with backend integration
10. **Footer** — Links, contact info, social icons, status indicator

---

## 🔧 Customization

- **Brand colors**: Edit `--color-brand-red` in `client/src/index.css`
- **Pricing**: Edit `plans` array in `Pricing.jsx`
- **Features**: Edit `features` array in `Features.jsx`
- **Testimonials**: Edit `testimonials` array in `Testimonials.jsx`

---

*Made with ❤️ for Indian Restaurants — Bhojan Bandhu POS*
