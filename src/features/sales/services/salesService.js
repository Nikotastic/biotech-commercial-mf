import apiService from "@shared-services/ApiService";

export const salesService = {
  getSales: async (filters = {}) => {
    const response = await apiService.get("/sales", { params: filters });
    return response.data;
  },

  getSaleById: async (id) => {
    const response = await apiService.get(`/sales/${id}`);
    return response.data;
  },

  createSale: async (data) => {
    const response = await apiService.post("/sales", data);
    return response.data;
  },

  updateSale: async (id, data) => {
    const response = await apiService.put(`/sales/${id}`, data);
    return response.data;
  },

  deleteSale: async (id) => {
    const response = await apiService.delete(`/sales/${id}`);
    return response.data;
  },
};
