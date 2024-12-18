import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Add your path aliases here based on your Next.js configuration
      "@": path.resolve(__dirname, "./"), // Change this path according to your alias setup
    },
  },
});
