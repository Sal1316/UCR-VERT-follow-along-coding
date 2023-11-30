import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; //This plugin allows Vite to handle React-specific features and optimizations.


export default defineConfig({
  plugins: [react()], // Configures Vite to use the react plugin
  server: {
    port: 3000,
    open: true,
  },
});


/* NOTES:
- What is vitejs? Vite is a build tool that focuses on providing a fast development experience for web projects.
// https://vitejs.dev/config/


*/ 