# 💰 BioTech Commercial - Gestión Comercial

Módulo de ventas, facturación y gestión de clientes.

## 🚀 Características

- **Gestión de ventas**: Registro completo
- **Clientes**: Base de datos de compradores
- **Facturación**: Generación de facturas
- **Cotizaciones**: Presupuestos
- **Reportes de ventas**: Analytics
- **Seguimiento**: Pipeline de ventas
- **Pagos**: Control de cobros

## 🛠️ Tecnologías

- React 18
- Vite + Module Federation
- React Hook Form + Yup
- Axios
- Zustand
- Tailwind CSS

## 📦 Instalación

```bash
npm install
npm run dev  # Puerto 5007
```

## 🔌 Componentes Expuestos

```javascript
// Dashboard de ventas
import('commercialMF/SalesDashboard')

// Formulario de ventas
import('commercialMF/SalesForm')

// Lista de clientes
import('commercialMF/ClientsList')

// Facturas
import('commercialMF/InvoicesList')

// Reportes
import('commercialMF/SalesReport')

// Store
import('commercialMF/CommercialStore')
```

## 📁 Estructura

```
src/
├── features/
│   ├── sales/
│   │   ├── components/
│   │   │   ├── SalesDashboard.jsx
│   │   │   └── SalesForm.jsx
│   │   ├── hooks/
│   │   │   └── useSales.js
│   │   ├── services/
│   │   │   └── salesService.js
│   │   └── validations/
│   ├── clients/
│   │   ├── components/
│   │   ├── validations/
│   │   └── services/
│   ├── invoices/
│   │   ├── components/
│   │   └── services/
│   └── reports/
│       ├── components/
│       └── services/
├── shared/
│   ├── store/
│   │   └── commercialStore.js
│   ├── constants/
│   │   └── commercialConstants.js
│   └── utils/
└── App.jsx
```

## 💳 Estados de Venta

```javascript
export const SALE_STATUS = {
  PENDING: 'Pendiente',
  CONFIRMED: 'Confirmada',
  DELIVERED: 'Entregada',
  PAID: 'Pagada',
  CANCELLED: 'Cancelada'
}
```

## 💰 Métodos de Pago

```javascript
export const PAYMENT_METHODS = {
  CASH: 'Efectivo',
  TRANSFER: 'Transferencia',
  CHECK: 'Cheque',
  CREDIT: 'Crédito'
}
```

## 🌍 API Endpoints

```javascript
GET    /api/sales                    // Ventas
POST   /api/sales                    // Nueva venta
PUT    /api/sales/:id                // Actualizar
DELETE /api/sales/:id                // Cancelar
GET    /api/clients                  // Clientes
POST   /api/clients                  // Nuevo cliente
GET    /api/invoices                 // Facturas
POST   /api/invoices                 // Generar factura
GET    /api/sales/reports            // Reportes
```

## 🛒 Venta

```typescript
interface Sale {
  id: number
  date: Date
  clientId: number
  clientName: string
  products: [
    {
      animalId: number
      animalType: string
      quantity: number
      pricePerUnit: number
      subtotal: number
    }
  ]
  subtotal: number
  tax: number
  total: number
  paymentMethod: string
  deliveryDate: Date
  status: string
  notes?: string
}
```

## 👥 Cliente

```typescript
interface Client {
  id: number
  name: string
  type: 'Persona Natural' | 'Empresa' | 'Distribuidor' | 'Procesador'
  taxId: string
  contact: string
  phone: string
  email: string
  address: string
  city: string
  totalPurchases: number
  totalSpent: number
  creditLimit?: number
  status: 'Activo' | 'Inactivo'
}
```

## 📊 KPIs de Ventas

- Ingresos totales
- Ventas por período
- Ticket promedio
- Conversión de cotizaciones
- Clientes activos
- Top productos
- Top clientes

## 📈 Reportes

- Ventas por mes/año
- Ventas por cliente
- Ventas por producto
- Comisiones de vendedores
- Análisis de precios
- Forecast de ventas

## 🔔 Alertas

```javascript
// Notificaciones
- Nueva venta registrada
- Pago pendiente (vencimiento)
- Cliente sin compras (90 días)
- Meta de ventas alcanzada
```

## 🚀 Deploy

```bash
npm run build
vercel --prod
```

## 📞 Contacto

- Email: commercial@biotech.com
- Docs: https://docs.biotech.com/commercial
```