# React + Vite

## Overview
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## How to Run the Development Server
To start the development server, use the following commands:

```bash
cd frontend
npm install
npm run dev
```

This will start the Vite development server and provide HMR (Hot Module Replacement).

## How to Build the Project
To create a production build, use the following command:

```bash
npm run build
```

The build output will be located in the `dist` directory.

## Expanding the ESLint Configuration
If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
