# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Development
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run format` - Format code with Prettier
- `npm run lint` - Check code formatting
- `npm run check` - Type-check with svelte-check
- `npm run check:watch` - Type-check in watch mode

### Database Management
- `npm run db:push` - Push schema changes to database
- `npm run db:generate` - Generate migrations
- `npm run db:migrate` - Run migrations
- `npm run db:studio` - Open Drizzle Studio for database management

## Architecture Overview

This is a SvelteKit application with server-side authentication and PostgreSQL database using Drizzle ORM.

### Tech Stack
- **Framework**: SvelteKit with Svelte 5
- **Database**: PostgreSQL (Neon) with Drizzle ORM
- **Deployment**: Vercel adapter
- **Type Safety**: TypeScript with strict mode
- **Authentication**: Custom session-based auth using cookies

### Key Architectural Components

1. **Database Layer** (`src/lib/server/db/`)
   - `schema.ts`: Drizzle schema definitions for users and sessions
   - `index.ts`: Database connection using Neon serverless driver
   - Environment variable `DATABASE_URL` required

2. **Authentication System** (`src/lib/server/auth.ts`)
   - Session-based authentication with 30-day expiry
   - SHA256 hashed session tokens stored as cookies
   - Automatic session renewal within 15 days of expiry
   - Session validation in server hooks

3. **Server Hooks** (`src/hooks.server.ts`)
   - Validates session tokens on every request
   - Populates `event.locals` with user and session data
   - Handles cookie management for sessions

4. **Type Definitions** (`src/app.d.ts`)
   - Global App namespace configuration
   - Locals interface for user/session data available in all server-side code

### Database Schema Issues

Note: The auth.ts file references `table.user.username` but the schema only defines `id` and `age` fields. This needs to be fixed before authentication can work properly.

### Environment Setup

Required environment variables:
- `DATABASE_URL`: PostgreSQL connection string (see .env.example)