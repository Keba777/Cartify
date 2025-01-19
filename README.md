# Cartify - Ecommerce Platform

Cartify is an ecommerce platform for seamless clothing and apparel shopping, built with **Go** (backend), **PostgreSQL** (database), and **Next.js** (frontend). It allows users to browse products, manage carts, and place orders.

## Folder Structure

Cartify/
├── backend/  # Go-based backend API (PostgreSQL)
├── web/      # Frontend (Next.js)

## Tech Stack

- **Backend**: Go, Gin, PostgreSQL
- **Frontend**: Next.js, React, Tailwind CSS

## Getting Started

### 1. Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/cartify.git
   cd cartify/backend
   ```

2. Install dependencies:
   ```bash
   go mod tidy
   ```

3. Set up PostgreSQL and configure `config/database.go`.

4. Run the backend:
   ```bash
   go run main.go
   ```

### 2. Web Setup

1. Navigate to the `web` directory:
   ```bash
   cd cartify/web
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the frontend:
   ```bash
   npm run dev
   ```

The backend runs on `http://localhost:8080` and the frontend on `http://localhost:3000`.

## Features

- Product CRUD
- Shopping Cart & Checkout
- Order Processing
- User Authentication

