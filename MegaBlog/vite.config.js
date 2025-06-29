import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    host: "localhost", // 🔒 ensures matching origin
    origin: "http://localhost:5173",
    cors: {
      origin: "http://localhost:5173",
      credentials: true, // 🔥 enables cookies
    },
  },
});
