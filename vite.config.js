import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'commercialMF',
      filename: 'remoteEntry.js',
      exposes: {
        './SalesDashboard': './src/features/sales/components/SalesDashboard.jsx',
        './SalesForm': './src/features/sales/components/SalesForm.jsx',
        './ClientsList': './src/features/clients/components/ClientsList.jsx',
        './InvoicesList': './src/features/invoices/components/InvoicesList.jsx',
        './SalesReport': './src/features/reports/components/SalesReport.jsx',
        './CommercialStore': './src/shared/store/commercialStore.js'
      },
      shared: ['react', 'react-dom', 'react-router-dom', 'zustand', 'axios']
    })
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  },
  server: {
    port: 5007,
    cors: true
  }
})