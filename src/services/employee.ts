import { Employee } from '../interfaces';
import { EmployeeRepository } from '../repository/employee'
import { ApiError } from '../utils/api-errors';

export class EmployeeService {
    public static getAll() {
       return EmployeeRepository.getAll(); 
    }
    public static async create(employee: Employee) {
        const result =  await EmployeeRepository.findByCpf(employee.cpf)
        
        if (result.length) {
            throw new ApiError('Empregado Já cadastrado').withStatus(400)
        }

        return EmployeeRepository.create(employee); 
    }
}