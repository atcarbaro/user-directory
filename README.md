# User Directory

A modern user directory application built with React, TypeScript, and Vite. Features real-time search with debounce and xpandable user cards.

## 🚀 Getting Started

### Installation
```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📁 Project Structure
```
src/
├── components/
│   ├── SearchBar/          # Search input with debounce
│   ├── UserCard/           # Expandable user card
│   ├── UserGrid/           # Grid layout container
│   ├── UserDetails/        # User detail view
│   └── icons/              # SVG icon components
├── hooks/
│   ├── useUsers.ts         # Fetch users data
│   └── useDebounce.ts      # Debounce hook
├── utils/
│   ├── filterUsers.ts      # Filter logic
│   ├── getInitials.ts      # Generate initials
│   └── formatAddress.ts    # Format addresses
├── types/
│   ├── user.types.ts       # User data types
│   └── component.types.ts  # Component prop types
├── config/
    └── constants.ts        # API endpoints
```

## 🛠️ Tech Stack

- React 18 + TypeScript
- Vite
- Styled Components + CSS Modules

## 📝 Environment Setup

Create a `.env` file (optional):
```env
VITE_API_BASE_URL=https://jsonplaceholder.typicode.com
```