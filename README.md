# Husqvarna Retailer Portal

A modern React-based retailer portal application for Husqvarna partners with comprehensive functionality including orders, catalog, support, training, and integration management.

**🌐 Live Site:** https://hsq-emilkarlsson.github.io/hsq-prototyp-communication/

## 🚀 Live Demo

Visit the live application: [https://hsq-emilkarlsson.github.io/hsq-prototyp-communication/](https://hsq-emilkarlsson.github.io/hsq-prototyp-communication/)

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## � Features

### Core Functionality
- **Overview Dashboard** - Quick access to all portal features and recent activities
- **Orders Management** - Complete order tracking and management system
- **Product Catalog** - Browse and search product specifications
- **Support Center** - Unified support with case management and system status
- **Training Hub** - Access to courses and certification programs
- **Marketing Center** - Marketing tools and campaign management
- **Integrations** - POS, Business Systems, Fleet Management, and Workshop Planning
- **Settings** - Account, notifications, security, and API management

### Enhanced User Experience
- **Clean Navigation** - Streamlined sidebar with logical grouping
- **Responsive Design** - Works seamlessly on desktop and mobile
- **Search Functionality** - Quick access to products, orders, and support
- **Real-time Updates** - Live status indicators and notifications
- **Efficiency Tracking** - Performance indicators for integrations

## �🛠️ Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling with Husqvarna brand colors
- **Heroicons** for consistent iconography
- **GitHub Pages** for deployment

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── PortalLayout.tsx # Main portal layout with navigation
│   ├── SalesTab.tsx     # Sales analytics component
│   └── ProductRegistrationDashboard.tsx
├── pages/               # Main application pages
│   ├── OverviewPage.tsx # Main dashboard overview
│   ├── OrdersPage.tsx   # Order management
│   ├── CatalogPage.tsx  # Product catalog
│   ├── SupportPage.tsx  # Unified support center
│   ├── TrainingPage.tsx # Training and certification
│   ├── MarketingPage.tsx # Marketing tools
│   ├── IntegrationsPage.tsx # Integration management
│   └── SettingsPage.tsx # User and system settings
├── data/                # Mock data and utilities
├── hooks/               # Custom React hooks
└── types/               # TypeScript type definitions
```

## 🎨 Design System

The application features Husqvarna's brand identity with:

- **Brand Colors**: Husqvarna blue (#273A60) and supporting grays
- **Clean Layout**: Card-based design with consistent spacing
- **Professional Typography**: Clear hierarchy and readability
- **Responsive layout**: Works on desktop and tablet devices
- **Consistent spacing**: Using Tailwind's systematic spacing scale

## 📱 Features

### Dashboard Overview
- Welcome section with user greeting
- Key performance indicators (KPIs)
- Quick action buttons
- Clean, minimal card-based layout

### Sales Analytics
- Interactive data visualization with Recharts
- Monthly performance metrics
- Top-performing products tracking
- Revenue and growth indicators

### Notifications Management
- Message filtering by type and status
- Read/unread status tracking
- Action buttons for message management
- Clean notification cards

### Navigation
- Collapsible sidebar navigation
- Active state indicators
- Responsive design for mobile/tablet
- User profile section

## 🔧 Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Available Scripts

- `npm run dev` - Start development server (usually on http://localhost:3000)
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Port Configuration

The development server is configured to use port 3000 in `vite.config.ts`. If port 3000 is unavailable, Vite will automatically try the next available port.

## 🎯 Future Enhancements

- User authentication integration
- Real-time data updates
- Advanced filtering and search
- Export functionality
- Mobile app optimization
- Dark mode support

## 📄 License

© 2025 Husqvarna Group. All rights reserved.
