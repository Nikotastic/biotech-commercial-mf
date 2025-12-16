import apiClient from "../utils/apiClient";

export const transactionService = {
  // Create a new transaction
  create: async (transactionData) => {
    try {
      // POST /api/transactions
      const response = await apiClient.post("/transactions", transactionData);
      return response.data;
    } catch (error) {
      console.error("Error creating transaction:", error);
      throw error;
    }
  },

  // Get transactions with optional filters
  getAll: async (filters = {}) => {
    try {
      const params = new URLSearchParams(filters).toString();
      // GET /api/transactions?farmId=...&fromDate=...
      const url = params ? `/transactions?${params}` : "/transactions";
      const response = await apiClient.get(url);
      return response.data;
    } catch (error) {
      console.error("Error fetching transactions:", error);
      throw error;
    }
  },

  // Get transaction details by ID
  getById: async (id) => {
    try {
      // GET /api/transactions/{id}
      const response = await apiClient.get(`/transactions/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching transaction ${id}:`, error);
      throw error;
    }
  },

  // Get animals associated with a transaction
  getAnimals: async (id) => {
    try {
      // GET /api/transactions/{id}/animals
      const response = await apiClient.get(`/transactions/${id}/animals`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching animals for transaction ${id}:`, error);
      throw error;
    }
  },

  // Get products associated with a transaction
  getProducts: async (id) => {
    try {
      // GET /api/transactions/{id}/products
      const response = await apiClient.get(`/transactions/${id}/products`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching products for transaction ${id}:`, error);
      throw error;
    }
  },
};

export const thirdPartyService = {
  // C  reate a new third party
  create: async (data) => {
    try {
      // POST /api/third-parties
      const response = await apiClient.post("/third-parties", data);
      return response.data;
    } catch (error) {
      console.error("Error creating third party:", error);
      throw error;
    }
  },

  // Update a third party
  update: async (id, data) => {
    try {
      // PUT /api/third-parties/{id}
      const response = await apiClient.put(`/third-parties/${id}`, data);
      return response.data;
    } catch (error) {
      console.error(`Error updating third party ${id}:`, error);
      throw error;
    }
  },

  // Get third parties with optional filters
  getAll: async (filters = {}) => {
    try {
      const params = new URLSearchParams(filters).toString();
      // GET /api/third-parties?filters...
      const url = params ? `/third-parties?${params}` : "/third-parties";
      const response = await apiClient.get(url);
      return response.data;
    } catch (error) {
      console.error("Error fetching third parties:", error);
      throw error;
    }
  },

  // Get third party details by ID
  getById: async (id) => {
    try {
      // GET /api/third-parties/{id}
      const response = await apiClient.get(`/third-parties/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching third party ${id}:`, error);
      throw error;
    }
  },
};

export const commercialService = {
  transactions: transactionService,
  thirdParties: thirdPartyService,
};

export default commercialService;
