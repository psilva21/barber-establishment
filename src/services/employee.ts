import { Employee } from '../interfaces';
import { EmployeeRepository } from '../repository/employee'

export class EmployeeService {
    public static getAll() {
       return EmployeeRepository.getAll(); 
    }
    public static create(employee: Employee) {
        return EmployeeRepository.create(employee); 
    }
}