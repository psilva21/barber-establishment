import revenueRoutes from './revenue'
import jobRoutes from './job'

const routes = [
    {
        path: '/revenue',
        routes:  revenueRoutes
    },
    {
        path: '/jobs',
        routes:  jobRoutes
    }
]

export default routes