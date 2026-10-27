# 🎮 GameHub — Video Game Catalog

A web application built with **React** that uses the [RAWG Video Games Database API](https://rawg.io/apidocs) to explore video games, search for titles, view detailed information, and manage favorites.

This project was developed to practice modern frontend development, REST API integration, reusable components, state management, and maintainable React architecture.

## ✨ Features

### 🎮 Video Game Catalog
- Browse video games fetched from the RAWG API.
- Display reusable game cards with cover images, ratings, release dates, genres, and platforms.

### 🔎 Search and Sorting
- Search for games using the RAWG API.
- Debounced search implemented with a custom React Hook.
- Sort results by rating, release date, and name.

### 📄 Game Details
- View detailed information about each game.
- Explore genres, platforms, developers, release dates, ratings, and descriptions.
- Access official game websites when available.
- Browse game screenshots.

### ⭐ Favorites
- Add and remove games from favorites.
- Manage favorite games using React Context API.
- Persist favorite game IDs in `localStorage`.

### 🧭 Navigation
Implemented with React Router DOM.

| Route | Description |
|---|---|
| `/` | Main game catalog |
| `/game/:id` | Game details |
| `/favorites` | Favorite games |

## 🛠️ Tech Stack

**Frontend**
- React
- JavaScript
- Vite
- React Router DOM
- React Hooks and Context API
- CSS3

**API and Libraries**
- Axios
- RAWG Video Games Database API
- React Icons

**Development Tools**
- Git and GitHub
- npm

## 🏗️ Project Architecture

The project follows a modular structure that separates UI components, pages, API communication, and state management.

```text
src/
├── api/                # Axios configuration
├── components/         # Reusable UI components
│   ├── FavoriteButton/
│   ├── Filters/
│   ├── GameCard/
│   ├── GameGrid/
│   ├── GameScreenshots/
│   ├── Layout/
│   └── NavBar/
├── context/             # Shared application state
├── hooks/               # Custom React Hooks
├── pages/               # Application pages
│   ├── Favorites/
│   ├── GameDetails/
│   └── Home/
├── routes/              # Routing configuration
├── services/            # API requests
└── styles/              # Global styles
```

This structure helps separate responsibilities, improve code readability, and make future enhancements easier to maintain.

## 🔌 API Integration

GameHub communicates with the RAWG API through Axios.

The API layer and service functions separate HTTP requests from UI components and handle operations such as:

- Fetching the game catalog.
- Retrieving individual game details.
- Loading game screenshots.
- Searching and sorting game results.

The API key is configured through a Vite environment variable.

## 💾 State Management

The application uses React's built-in state management tools according to each feature's needs:

- `useState` for local component state.
- `useEffect` for side effects and asynchronous data loading.
- Custom Hooks for reusable logic, including debounced search.
- Context API for shared favorites state.
- `localStorage` for persisting favorite game IDs across browser sessions.

## 🚀 Getting Started

### Prerequisites

- Node.js and npm.
- A RAWG API key. See the [RAWG API documentation](https://rawg.io/apidocs).

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/Jacercen/gamehub.git
cd gamehub
```

**2. Install dependencies**

```bash
npm install
```

**3. Configure environment variables**

Create a `.env` file in the project root:

```env
VITE_RAWG_API_KEY=YOUR_API_KEY
```

Replace `YOUR_API_KEY` with your own RAWG API key.

**4. Start the development server**

```bash
npm run dev
```

Open the local URL displayed in your terminal, usually `http://localhost:5173`.

**Note:** Never commit your actual `.env` file. A Vite environment variable is exposed in the client-side application, so it must not be treated as a secret. Check the RAWG API terms and key restrictions before publishing or deploying the application.

## 📌 Planned Improvements

Potential future enhancements include:

- Genre and platform filters.
- Pagination or infinite scrolling.
- Skeleton loading states.
- More robust error handling.
- Responsive design and accessibility improvements.
- Request caching and performance optimization.

These improvements are planned and may not be implemented yet.

## 🎯 What I Learned

Through this project, I have practiced:

- Building reusable React components.
- Integrating a third-party REST API.
- Organizing API requests into a separate service layer.
- Creating and using custom Hooks.
- Managing shared state with Context API.
- Persisting application data with `localStorage`.
- Implementing client-side routing.
- Structuring a frontend project for maintainability.

## 👨‍💻 Author

**Jacercen**

[GitHub Profile](https://github.com/Jacercen)

---

*Built as a personal project to develop my frontend engineering skills and explore modern React development.*
