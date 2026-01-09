import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  // This base is only needed for GitHub Pages deployment
  base: "/Experience-Anbarasasn-Portfolio/", 
  server: {
    host: "0.0.0.0",
    port: 8080,
    // --- ADDED THIS LINE BELOW ---
    allowedHosts: true, 
    // ----------------------------
    fs: {
      strict: false
    }
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});