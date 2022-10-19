import { Employee } from '../interfaces';
import { EmployeeRepository } from '../repository/employee'

export class EmployeeService {
    public static getAll() {
       return EmployeeRepository.getAll(); 
    }
    public static async create(employee: Employee) {
        const result =  await EmployeeRepository.findByCpf(employee.cpf)
        
        if (result.length) {
            throw new Error('Empregado já cadastrado')
        }

        return EmployeeRepository.create(employee); 
    }
}