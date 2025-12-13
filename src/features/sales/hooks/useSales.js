import { useState, useEffect } from 'react'
import { salesService } from '../services/salesService'
import { useCommercialStore } from '../../../shared/store/commercialStore'

export const useSales = (filters = {}) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const { sales, setSales } = useCommercialStore()

  const fetchSales = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await salesService.getSales(filters)
      setSales(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const createSale = async (data) => {
    try {
      setLoading(true)
      const newSale = await salesService.createSale(data)
      await fetchSales()
      return newSale
    } catch (err) {
      setError(err.message)
      throw err
    } finally {
      setLoading(false)
    }
  }

  const deleteSale = async (id) => {
    try {
      await salesService.deleteSale(id)
      await fetchSales()
    } catch (err) {
      setError(err.message)
      throw err
    }
  }

  useEffect(() => {
    fetchSales()
  }, [JSON.stringify(filters)])

  return { sales, loading, error, fetchSales, createSale, deleteSale }
}