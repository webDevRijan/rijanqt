# Student Resource Hub

A full-stack web application demonstrating the integration of **web servers** and **file servers** using modern web technologies.

## Project Information

**Course:** Bachelor of Science in Information Technology (BSIT)
**Purpose:** Educational demonstration of web and file server concepts

## Architecture Overview

This application demonstrates a simple frontend-first data architecture:

1. **Data Storage** - Resource metadata is stored in a local JSON file inside the app
2. **Web App** - React renders the user interface and loads data from static JSON
3. **File Server** - External file hosting (Google Drive links) for downloadable resources

## Technology Stack

### Frontend

- React 18 with TypeScript
- Pure CSS (no frameworks)
- Responsive design with mobile support
- Lucide React for icons

### Backend

- No backend required; the app loads metadata from a local JSON file
- Static React user interface with client-side data rendering
- REST-like resource listing from static data

### Features

- Local JSON-backed resource listing
- External file server integration
- Loading states and error handling
- Mobile-responsive navigation
- Modern, clean UI with hover effects

## Project Structure

```
student-resource-hub/
├── src/
│   ├── components/
│   │   ├── Navigation.tsx    # Main navigation bar
│   │   └── Footer.tsx        # Footer component
│   ├── data/
│   │   └── resources.json    # Local resource metadata
│   ├── pages/
│   │   ├── Home.tsx          # Landing page
│   │   ├── About.tsx         # About/project info
│   │   └── Resources.tsx     # Resources listing
│   ├── App.tsx               # Main app component
│   ├── main.tsx              # Entry point
│   └── index.css             # Pure CSS styles
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd student-resource-hub
```

2. Install dependencies:

```bash
npm install
```

### Running the Application

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## How It Works

### Web Server Concept

The Resources page loads its list of materials directly from a local JSON data file. This eliminates the need for a backend API or external database.

### File Server Concept

Downloadable files are still hosted externally to demonstrate separate file delivery, while metadata remains self-contained in the frontend application.

1. File metadata (title, description) is stored in the database
2. Actual files are hosted on external file servers (Google Drive)
3. Users click "Download" to access files from the file server
4. This separates concerns: web server handles logic, file server handles storage

### Database Structure

**Resources Table:**

- `id` - Unique identifier
- `title` - Resource name
- `description` - Resource details
- `link` - External file server URL
- `order_index` - Display order
- `created_at` - Timestamp

## API Endpoints

### GET /functions/v1/resources

Returns a list of all available resources.

**Response:**

```json
[
  {
    "id": "uuid",
    "title": "Module 1: Introduction",
    "description": "Course introduction materials",
    "link": "https://drive.google.com/...",
    "order_index": 1,
    "created_at": "2024-01-01T00:00:00Z"
  }
]
```

## Features Implemented

- [x] Home page with hero section and feature cards
- [x] About page with student and project information
- [x] Resources page with dynamic data fetching
- [x] Fixed navigation bar with mobile menu
- [x] Responsive footer
- [x] Loading states during data fetch
- [x] Error handling and retry functionality
- [x] Pure CSS with smooth animations
- [x] Mobile-responsive design
- [x] External link integration (file server simulation)

## Design Highlights

- **Clean UI:** Modern, professional design with soft colors
- **Hover Effects:** Smooth transitions on buttons and cards
- **Responsive:** Optimized for mobile, tablet, and desktop
- **Accessible:** Proper semantic HTML and ARIA labels
- **Performance:** Optimized CSS with efficient selectors

## Development Notes

### Styling

All styles are written in pure CSS using CSS custom properties (variables) for theming. No CSS frameworks like Tailwind or Bootstrap were used.

### State Management

Simple React state management using `useState` for navigation and data fetching.

### API Integration

The Resources page demonstrates real-world API integration with:

- Loading states
- Error handling
- Retry functionality
- Environment variable configuration

## Future Enhancements

- User authentication
- Resource upload functionality
- Search and filter capabilities
- Categories and tags
- Download tracking
- User favorites

## License

This project is created for educational purposes.

## Contact

For questions or feedback, please contact the project maintainer.
