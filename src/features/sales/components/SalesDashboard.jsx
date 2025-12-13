import { useSales } from '../hooks/useSales'
import { useNavigate } from 'react-router-dom'
import { SALE_STATUS } from '../../../shared/constants/commercialConstants'

export default function SalesDashboard() {
  const { sales, loading, error } = useSales()
  const navigate = useNavigate()

  const salesStats = {
    totalSales: 45,
    totalRevenue: 850000,
    pendingSales: 8,
    monthlySales: 12
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <p className="text-red-600">Error: {error}</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Gestión Comercial</h1>
        <div className="flex gap-3">
          <button 
            onClick={() => navigate('/commercial/clients')}
            className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
          >
            👥 Clientes
          </button>
          <button 
            onClick={() => navigate('/commercial/reports')}
            className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
          >
            📊 Reportes
          </button>
          <button 
            onClick={() => navigate('/commercial/sales/new')}
            className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
          >
            + Nueva Venta
          </button>
        </div>
      </div>

      {/* Estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Total Ventas</p>
              <p className="text-3xl font-bold text-gray-900">{salesStats.totalSales}</p>
              <p className="text-sm text-green-600 mt-1">↑ 15% vs mes anterior</p>
            </div>
            <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="text-2xl">📈</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Ingresos Totales</p>
              <p className="text-3xl font-bold text-gray-900">${salesStats.totalRevenue.toLocaleString()}</p>
              <p className="text-sm text-green-600 mt-1">↑ 22% vs mes anterior</p>
            </div>
            <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
              <span className="text-2xl">💰</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Ventas Pendientes</p>
              <p className="text-3xl font-bold text-orange-600">{salesStats.pendingSales}</p>
              <p className="text-sm text-gray-500 mt-1">Requieren atención</p>
            </div>
            <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center">
              <span className="text-2xl">⏳</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Ventas Este Mes</p>
              <p className="text-3xl font-bold text-gray-900">{salesStats.monthlySales}</p>
              <p className="text-sm text-blue-600 mt-1">8 días restantes</p>
            </div>
            <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
              <span className="text-2xl">📅</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filtros */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex gap-4">
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500">
            <option value="">Todos los estados</option>
            {Object.entries(SALE_STATUS).map(([key, value]) => (
              <option key={key} value={key}>{value}</option>
            ))}
          </select>

          <input
            type="date"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
            placeholder="Fecha desde"
          />

          <input
            type="date"
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
            placeholder="Fecha hasta"
          />

          <input
            type="text"
            placeholder="Buscar cliente..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
          />

          <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
            Buscar
          </button>
        </div>
      </div>

      {/* Tabla de ventas */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">ID Venta</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Fecha</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Cliente</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Producto</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Cantidad</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Total</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Estado</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {sales.map((sale) => (
                <tr key={sale.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    #{sale.id.toString().padStart(5, '0')}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {new Date(sale.date).toLocaleDateString('es-ES')}
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{sale.clientName}</p>
                      <p className="text-sm text-gray-500">{sale.clientId}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">{sale.product}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {sale.quantity} {sale.unit}
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    ${sale.total.toLocaleString()}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      sale.status === 'Pagada' ? 'bg-green-100 text-green-800' :
                      sale.status === 'Confirmada' ? 'bg-blue-100 text-blue-800' :
                      sale.status === 'Entregada' ? 'bg-purple-100 text-purple-800' :
                      sale.status === 'Pendiente' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {sale.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button 
                        onClick={() => navigate(`/commercial/sales/${sale.id}`)}
                        className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                      >
                        Ver
                      </button>
                      <button className="text-green-600 hover:text-green-700 text-sm font-medium">
                        Factura
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Ventas recientes destacadas */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Ventas Destacadas del Mes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-3xl">🏆</span>
              <span className="px-2 py-1 bg-green-200 text-green-800 text-xs font-bold rounded-full">
                Top Venta
              </span>
            </div>
            <p className="text-lg font-bold text-gray-900">$125,000</p>
            <p className="text-sm text-gray-600">Ganadería El Roble</p>
            <p className="text-xs text-gray-500 mt-1">15 animales de cría</p>
          </div>

          <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-3xl">⚡</span>
              <span className="px-2 py-1 bg-blue-200 text-blue-800 text-xs font-bold rounded-full">
                Más Rápida
              </span>
            </div>
            <p className="text-lg font-bold text-gray-900">$45,000</p>
            <p className="text-sm text-gray-600">Procesadora ABC</p>
            <p className="text-xs text-gray-500 mt-1">Cerrado en 2 días</p>
          </div>

          <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-3xl">🔄</span>
              <span className="px-2 py-1 bg-purple-200 text-purple-800 text-xs font-bold rounded-full">
                Recurrente
              </span>
            </div>
            <p className="text-lg font-bold text-gray-900">$280,000</p>
            <p className="text-sm text-gray-600">Distribuidora XYZ</p>
            <p className="text-xs text-gray-500 mt-1">4ta compra este mes</p>
          </div>
        </div>
      </div>
    </div>
  )
}