import revenueRoutes from './revenue'
import jobRoutes from './job'
import employeeRoutes from './employee'
import paymentMethodRoutes from './payment-method'

const routes = [
    {
        path: '/revenue',
        routes:  revenueRoutes
    },
    {
        path: '/jobs',
        routes:  jobRoutes
    },
    {
        path: '/employees',
        routes: employeeRoutes
    },
    {
        path: '/payments',
        routes: paymentMethodRoutes
    }
]

export default routes