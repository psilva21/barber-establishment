import { Revenue } from '../interfaces';
import { RevenueRepository } from '../repository/revenue'
import { ApiError } from '../utils/api-errors';
import { EmployeeService } from './employee';
import { JobService } from './job';
import { PaymentMethodService } from './payment-method';

export class RevenueService {
    public static register(reqBody: Revenue) {
       return RevenueRepository.register(reqBody); 
    }
    public static async getAll() {
        const revenues = await RevenueRepository.getAll();

        const teste = await Promise.all(revenues.map(async (rev) => {
            const ue = rev
            const payment = await PaymentMethodService.getById(rev.id)
            const responsible = await EmployeeService.getById(rev.responsible as string)
            console.log({ payment, responsible, rev})
            return {
                ...ue,
                payment: payment?.title,
                responsible: responsible?.name
            }
        }))

        console.log({teste})

        return teste
    }
    public static getByDate(date: string) {
        return RevenueRepository.getByDate(date);
    }
    public static async getResources() {
        const paymentMethods = await PaymentMethodService.getAll()
        const employees = await EmployeeService.getAll()
        const availableServices = await JobService.getAll()

        const result = {
            payments: paymentMethods,
            employees,
            services: availableServices,
        }

        return result;
    }
}