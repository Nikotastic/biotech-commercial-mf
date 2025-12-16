import { useState, useEffect } from "react";
import { commercialService } from "../../../shared/services/commercialService";

export const useTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    farmId: null, // To be filled from auth
  });

  // Get Farm ID from Local Storage
  useEffect(() => {
    const authStorage = localStorage.getItem("auth-storage");
    if (authStorage) {
      try {
        const parsed = JSON.parse(authStorage);
        const farmId = parsed?.state?.selectedFarm?.id;
        if (farmId) {
          setFilters((prev) => ({ ...prev, farmId }));
        }
      } catch (e) {
        console.error("Error reading auth storage", e);
      }
    }
  }, []);

  const fetchTransactions = async () => {
    if (!filters.farmId) return;

    setLoading(true);
    try {
      const data = await commercialService.transactions.getAll(filters);
      setTransactions(data);
      setError(null);
    } catch (err) {
      setError("Error al cargar transacciones.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, [filters]);

  return {
    transactions,
    loading,
    error,
    refetch: fetchTransactions,
    setFilters,
  };
};
