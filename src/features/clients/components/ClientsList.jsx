import { useState } from 'react'
import { CLIENT_TYPES } from '../../../shared/constants/commercialConstants'

export default function ClientsList() {
  const [searchTerm, setSearchTerm] = useState('')

  const clients = [
    { id: 1, name: 'Ganadería El Roble', type: 'Empresa', contact: 'Juan Pérez', phone: '555-0001', email: 'contacto@elroble.com', totalPurchases: 8, totalSpent: 450000 },
    { id: 2, name: 'Pedro González', type: 'Persona Natural', contact: 'Pedro González', phone: '555-0002', email: 'pedro@email.com', totalPurchases: 3, totalSpent: 85000 },
    { id: 3, name: 'Procesadora ABC', type: 'Procesador', contact: 'María López', phone: '555-0003', email: 'ventas@abc.com', totalPurchases: 12, totalSpent: 780000 }
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Clientes</h1>
        <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
          + Nuevo Cliente
        </button>
      </div>

      {/* Estadísticas de clientes */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-sm text-gray-600 font-medium">Total Clientes</p>
          <p className="text-3xl font-bold text-gray-900">48</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-sm text-gray-600 font-medium">Clientes Activos</p>
          <p className="text-3xl font-bold text-green-600">42</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-sm text-gray-600 font-medium">Nuevos Este Mes</p>
          <p className="text-3xl font-bold text-blue-600">5</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-sm text-gray-600 font-medium">Valor Promedio</p>
          <p className="text-3xl font-bold text-gray-900">$65K</p>
        </div>
      </div>

      {/* Filtros */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex gap-4">
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500">
            <option value="">Todos los tipos</option>
            {Object.entries(CLIENT_TYPES).map(([key, value]) => (
              <option key={key} value={key}>{value}</option>
            ))}
          </select>

          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar cliente..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
          />

          <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
            Buscar
          </button>
        </div>
      </div>

      {/* Tabla de clientes */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Cliente</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Tipo</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Contacto</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Teléfono</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Email</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Total Compras</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Total Gastado</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {clients.map((client) => (
                <tr key={client.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center">
                        <span className="text-lg">👤</span>
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">{client.name}</p>
                        <p className="text-sm text-gray-500">ID: {client.id.toString().padStart(4, '0')}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                      {client.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{client.contact}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{client.phone}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{client.email}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{client.totalPurchases}</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    ${client.totalSpent.toLocaleString()}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                        Ver
                      </button>
                      <button className="text-green-600 hover:text-green-700 text-sm font-medium">
                        Editar
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}