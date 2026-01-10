import apiClient from "@shared/utils/apiClient";

export const salesService = {
  getSales: async (filters = {}) => {
    const response = await apiClient.get("/sales", { params: filters });
    return response.data;
  },

  getSaleById: async (id) => {
    const response = await apiClient.get(`/sales/${id}`);
    return response.data;
  },

  createSale: async (data) => {
    const response = await apiClient.post("/sales", data);
    return response.data;
  },

  updateSale: async (id, data) => {
    const response = await apiClient.put(`/sales/${id}`, data);
    return response.data;
  },

  deleteSale: async (id) => {
    const response = await apiClient.delete(`/sales/${id}`);
    return response.data;
  },
};
