# Masjid Khazra — Website Design Document

**Date:** 12/03/2026
**Client:** Masjid-e-Khazra, 138-140 Butterbiggins Road, Glasgow G42 7AF
**Contact:** Amir Mushtaq (Funeral Director)
**Existing site:** https://www.masjidkhazra.org
**Donation platform:** MyDona (https://donate.mydona.com/masjid-e-khazra)

---

## Stack

- React 19
- Vite 7
- Tailwind CSS 4
- React Router 7

---

## Pages

| Page | Route | Purpose |
|------|-------|---------|
| Home | `/` | Hero, prayer times, featured appeal, about teaser |
| About | `/about` | History, facilities, staff |
| Services | `/services` | Marriages, tours, education, WhatsApp/app |
| Funerals | `/funerals` | Dedicated funeral service page (key differentiator) |
| Charity & Updates | `/charity` | Active campaigns, community work updates |
| Donate | `/donate` | Tiered impact cards → MyDona for payment |
| Contact | `/contact` | Form, map, phone, socials |

---

## Colour Palette

| Role | Colour | Usage |
|------|--------|-------|
| Primary | `#0B6B3A` | Headers, nav, trust elements |
| CTA | `#4CAF50` | Donate buttons, action CTAs |
| Accent | `#F89D35` | Donation highlights, urgency |
| Text | `#1A1A2E` | Body copy |
| Background | `#FAFAF7` | Warm off-white |

---

## Typography

- **Font:** Poppins (existing brand font)
- **Headings:** 600-700 weight
- **Body:** 400 weight

---

## Key Design Decisions

### Funerals Page
- Dedicated page, not a subsection — this is a key differentiator
- Direct contact for Amir Mushtaq (Funeral Director)
- Urgent/24hr contact if applicable
- Step-by-step process for families
- Islamic funeral guidance
- Content TBC from Amir

### Donation Flow
- Tiered impact amounts displayed on our site (Be The Mercy style)
- Spiritual framing — reward of giving, not obligation
- Each tier links to MyDona for payment processing
- Gift Aid handled by MyDona
- Zakat / Sadaqah / General fund categories
- Tiers TBC from mosque committee

### Charity & Updates
- Blog-style cards with image, date, title, excerpt
- Categories: food bank, community events, education, outreach
- Grid layout, newest first

### Prayer Times
- Placeholder until mosque confirms manual vs API approach

### Imagery
- Placeholder until mosque provides photos
- Style: warm, documentary, community-focused

---

## Design Inspiration

- **Be The Mercy** (https://bethemercy.org) — spiritual framing, trust palette, tiered donations, clean execution
- Cleaner than Be The Mercy — single mosque focus, fewer competing elements

---

## Awaiting from Client

1. Funeral service details from Amir Mushtaq
2. High-quality photos (exterior, prayer hall, events, charity)
3. Donation tiers and amounts
4. Active charity campaigns for launch
5. Prayer times approach (manual or API)
6. Staff/scholars names, roles, photos
7. High-res logo
