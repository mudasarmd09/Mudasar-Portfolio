# Development Environment Documentation

## Overview

This is a full-stack web application built with a modern React frontend and Express.js backend. The application uses TypeScript throughout, implements a design system with shadcn/ui components, and is configured for PostgreSQL database integration via Drizzle ORM. The project follows a monorepo structure with clear separation between client, server, and shared code.

## User Preferences

Preferred communication style: Simple, everyday language.
Portfolio Enhancement: Transform into world-class professional showcase for Mudasar MD
- Premium animations and micro-interactions
- Performance optimization with code splitting
- Modern architecture patterns
- Glass morphism and advanced visual effects
- Professional content with metrics and achievements

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming
- **State Management**: TanStack Query for server state, React Context for client state
- **Routing**: React Router DOM for client-side navigation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development**: tsx for TypeScript execution in development
- **Build**: esbuild for production bundling

### Database Architecture
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Shared TypeScript schema definitions with Zod validation
- **Migrations**: Drizzle Kit for database migrations
- **Connection**: Neon Database serverless driver

## Key Components

### Client Structure
- **Entry Point**: `client/src/main.tsx` renders the main App component
- **App Component**: Sets up providers (Query Client, Theme, Tooltip, Router)
- **Pages**: Index page with portfolio sections, NotFound for 404 handling
- **Components**: Modular UI components including Hero, About, Skills, Projects, Experience, Contact sections
- **UI Library**: Complete shadcn/ui component library with consistent styling
- **Theming**: Dark/light theme support with system preference detection

### Server Structure
- **Entry Point**: `server/index.ts` sets up Express server with middleware
- **Routes**: `server/routes.ts` for API endpoint registration (currently minimal)
- **Storage**: Abstract storage interface with in-memory implementation
- **Vite Integration**: Development server integration for hot reloading

### Shared Code
- **Schema**: Database schema definitions with Drizzle and Zod validation
- **Types**: Shared TypeScript interfaces and types

## Data Flow

### Client-Server Communication
- API routes prefixed with `/api`
- RESTful architecture (prepared for implementation)
- TanStack Query for data fetching and caching
- Form handling with React Hook Form and Zod validation

### State Management
- Server state: TanStack Query for API data
- Client state: React Context for theme and UI state
- Form state: React Hook Form for form validation and submission

### Database Operations
- Drizzle ORM for type-safe database queries
- Abstract storage interface allows switching between implementations
- Currently using in-memory storage with prepared PostgreSQL schema

## External Dependencies

### UI and Styling
- **Radix UI**: Headless UI primitives for accessibility
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **class-variance-authority**: Component variant handling

### Development Tools
- **TypeScript**: Type safety and developer experience
- **Vite**: Fast build tool with HMR
- **PostCSS**: CSS processing with Tailwind
- **tsx**: TypeScript execution for development

### Database and Validation
- **Drizzle ORM**: Type-safe SQL query builder
- **Zod**: Runtime type validation
- **@neondatabase/serverless**: PostgreSQL connection driver

### External Services
- **EmailJS**: Contact form email integration
- **Particles.js**: Background particle effects

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Static Assets**: Client build includes all frontend assets

### Environment Configuration
- **Development**: Uses tsx for TypeScript execution with Vite dev server
- **Production**: Compiled JavaScript with static file serving
- **Database**: Configured for PostgreSQL via DATABASE_URL environment variable

### Hosting Considerations
- Backend serves both API routes and static frontend files
- Ready for deployment on platforms supporting Node.js
- Database migrations handled via Drizzle Kit commands
- Environment variables needed: DATABASE_URL for production database

### Development Workflow
- `npm run dev`: Starts development server with hot reloading
- `npm run build`: Creates production build
- `npm run db:push`: Pushes schema changes to database
- TypeScript checking available via `npm run check`