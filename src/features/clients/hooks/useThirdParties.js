import { useState, useEffect } from "react";
import { commercialService } from "../../../shared/services/commercialService";

export const useThirdParties = () => {
  const [thirdParties, setThirdParties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [farmId, setFarmId] = useState(null);

  useEffect(() => {
    const authStorage = localStorage.getItem("auth-storage");
    if (authStorage) {
      try {
        const parsed = JSON.parse(authStorage);
        setFarmId(parsed?.state?.selectedFarm?.id);
      } catch (e) {}
    }
  }, []);

  const fetchThirdParties = async () => {
    if (!farmId) return;

    setLoading(true);
    try {
      const data = await commercialService.thirdParties.getAll({ farmId });
      setThirdParties(data);
      setError(null);
    } catch (err) {
      setError("Error al cargar terceros.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchThirdParties();
  }, [farmId]);

  return { thirdParties, loading, error, refetch: fetchThirdParties, farmId };
};
