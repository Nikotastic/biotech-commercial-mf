import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    react(),
    federation({
      name: "inventoryMF",
      filename: "remoteEntry.js",
      exposes: {
        "./CommercialDashboard":
          "./src/features/dashboard/components/CommercialDashboard.jsx",
        "./SalesDashboard":
          "./src/features/sales/components/SalesDashboard.jsx",
        "./CommercialStore": "./src/shared/store/commercialStore.js",
      },
      shared: ["react", "react-dom", "react-router-dom", "zustand", "axios"],
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 5006,
    cors: true,
  },
});
