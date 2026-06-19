## Project Setup Instructions

Follow these steps to run the application locally:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open the app:**
   Open your browser and navigate to the local URL provided by Vite (usually `http://localhost:5173/`).

## Framework & Libraries Used

- **React (v19)** - Core UI library
- **TypeScript** - For type safety and better developer experience
- **Vite** - Extremely fast frontend build tool and development server
- **Tailwind CSS (v4)** - Utility-first CSS framework for rapid styling
- **Redux Toolkit** & **React-Redux** - For robust state management (used heavily in the dashboard for applicant filtering, sorting, and pagination)
- **React Router DOM** - For application routing

## Known Issues & Limitations

- **Mock Data**: The application currently relies on local mock data (`src/data/mockApplicants.ts`) to populate the dashboard. There is no live backend or database integration yet.
- **Imperfections**: The landing page and dashboard components are largely responsive, but there may be minor styling imperfections on very small mobile viewports.
- **AI Ranking Feature**: The AI Ranking toggle and sliders in the filter panel are visually functional but the data filtering logic for these specific premium criteria requires a backend AI service to function properly.
- **Incomplete Routing**: Some links and buttons (especially in the sidebar) are currently placeholders and do not route to actual pages. Only the primary features requested for the dashboard are functional.
