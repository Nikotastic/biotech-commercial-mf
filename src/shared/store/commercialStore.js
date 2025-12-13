import { create } from 'zustand'

export const useCommercialStore = create((set) => ({
  sales: [],
  clients: [],
  invoices: [],
  selectedSale: null,
  loading: false,
  
  setSales: (sales) => set({ sales }),
  setClients: (clients) => set({ clients }),
  setInvoices: (invoices) => set({ invoices }),
  setSelectedSale: (sale) => set({ selectedSale: sale }),
  setLoading: (loading) => set({ loading })
}))