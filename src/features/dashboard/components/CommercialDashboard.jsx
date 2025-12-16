import React, { useState } from "react";
import { Plus, Search, DollarSign, Users, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { useTransactions } from "../../sales/hooks/useTransactions";
import { useThirdParties } from "../../clients/hooks/useThirdParties";

export function CommercialDashboard() {
  const { transactions, loading: loadingTrans } = useTransactions();
  const { thirdParties, loading: loadingClients } = useThirdParties();

  // Simple stats calculation
  const totalSales = transactions
    .filter((t) => t.type === "Sale")
    .reduce((acc, curr) => acc + (curr.totalAmount || 0), 0);

  const totalExpenses = transactions
    .filter((t) => t.type === "Expense")
    .reduce((acc, curr) => acc + (curr.totalAmount || 0), 0);

  const clientCount = thirdParties.filter((c) => c.isCustomer).length;
  const supplierCount = thirdParties.filter((c) => c.isSupplier).length;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Dashboard Comercial</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Ventas Totales"
          value={`$${totalSales.toLocaleString()}`}
          icon={<TrendingUp className="text-emerald-600" />}
          color="bg-emerald-50 text-emerald-900"
        />
        <StatCard
          title="Gastos Totales"
          value={`$${totalExpenses.toLocaleString()}`}
          icon={<DollarSign className="text-red-600" />}
          color="bg-red-50 text-red-900"
        />
        <StatCard
          title="Clientes Activos"
          value={loadingClients ? "-" : clientCount}
          icon={<Users className="text-blue-600" />}
          color="bg-blue-50 text-blue-900"
        />
        <StatCard
          title="Proveedores"
          value={loadingClients ? "-" : supplierCount}
          icon={<Users className="text-purple-600" />}
          color="bg-purple-50 text-purple-900"
        />
      </div>

      {/* Recent Transactions List (Simplified) */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800">
            Transacciones Recientes
          </h2>
        </div>

        {loadingTrans ? (
          <div className="text-center py-8">Cargando...</div>
        ) : transactions.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No hay transacciones registradas.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-100 text-gray-500 text-sm">
                  <th className="pb-3">Fecha</th>
                  <th className="pb-3">Descripción</th>
                  <th className="pb-3">Tipo</th>
                  <th className="pb-3 text-right">Monto</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {transactions.slice(0, 5).map((t) => (
                  <tr key={t.id} className="text-sm">
                    <td className="py-3 text-gray-600">
                      {new Date(t.date).toLocaleDateString()}
                    </td>
                    <td className="py-3 font-medium text-gray-900">
                      {t.description || "Sin descripción"}
                    </td>
                    <td className="py-3">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-bold ${
                          t.type === "Sale"
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {t.type === "Sale" ? "Venta" : "Gasto"}
                      </span>
                    </td>
                    <td className="py-3 text-right font-bold text-gray-900">
                      ${t.totalAmount?.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

function StatCard({ title, value, icon, color }) {
  return (
    <div
      className={`p-6 rounded-2xl shadow-sm border border-gray-100 bg-white`}
    >
      <div className="flex justify-between items-start mb-4">
        <div className={`p-3 rounded-xl ${color} bg-opacity-20`}>{icon}</div>
      </div>
      <h3 className="text-gray-500 text-sm font-medium mb-1">{title}</h3>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
    </div>
  );
}

export default CommercialDashboard;
