import { Revenue } from '../interfaces';
import { RevenueRepository } from '../repository/revenue'
import { EmployeeService } from './employee';
import { JobService } from './job';
import { PaymentMethodService } from './payment-method';

export class RevenueService {
    public static register(reqBody: Revenue) {
       return RevenueRepository.register(reqBody); 
    }
    public static getAll() {
        return RevenueRepository.getAll();
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