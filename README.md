# 🍽️ Admin Dashboard - Meal Distribution & User Management

An elegant and responsive admin dashboard built with **React** and **Tailwind CSS**, designed to monitor and manage users, credits, and analytics for a meal distribution platform.

---

## 🚀 Features

### 📊 Dashboard Overview

- **Analytics Cards** showing key stats:
  - Total Users
  - Active Today
  - Total Meals
  - Top Meal of the Day
- **Interactive Charts**:
  - User signups by month
  - Meal distribution by type (Breakfast, Lunch, Dinner)
- **Skeleton loader** shown while dashboard data is loading

### 👥 User Table

- Displays **50 users** with the following data:
  - Full name
  - Email address
  - Credit (max 1000)
  - Status: Active / Inactive
  - Account creation date
  - Last login date
- **Search**: Filter users by name or email
- **Pagination**: 10 users per page, with next/prev navigation
- **No match handling**: Displays a message when no users match the search query

### 📱 Responsive Sidebar

- **Desktop Sidebar**: Fixed on the left
- **Mobile Sidebar**: Toggles with overlay using a hamburger menu
- **Sticky Topbar**: Appears on mobile with navigation control

---

## 🧑‍💻 Tech Stack

- **React**
- **Tailwind CSS**
- **TypeScript**
- **Heroicons / Lucide React**
- **Mock Data** (static list of 50 dummy users)

---

## 📁 Project Structure (Key Files)

src/
├── components/
│ ├── Dashboard/
│ │ ├── AnalyticsCards.tsx
│ │ └── UserCharts.tsx
│ └── Meals/
│ └── MealTable.tsx
├── pages/
│ ├── Dashboard.tsx
│ └── Meals.tsx
├── types/
│ └── index.ts
├── App.tsx
├── main.tsx
└── index.css

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/zicoly/foodimetric-admin-features.git
cd meal-dashboard

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🧪 Dummy Data Source

### All user data is located in

/src/types/dummyUsers.ts

#### This file contains 50 realistic dummy users with randomly assigned

- **Credits (0 - 1000)**
- **Statuses (Active / Inactive)**
- **Creation and last login dates**

## 👤 Author

Omojola Zion Olalekan

## 📄 License

MIT © 2025 Omojola Zion
