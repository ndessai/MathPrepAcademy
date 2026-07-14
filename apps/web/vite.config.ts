import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const API_PROXY = {
  "/api": process.env.API_PROXY_TARGET ?? "http://localhost:3001",
};

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    proxy: API_PROXY,
  },
  preview: {
    proxy: API_PROXY,
  },
});
