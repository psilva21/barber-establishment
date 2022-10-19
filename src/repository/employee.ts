import Model from '../entities/employee'
import { Employee } from '../interfaces'

export class EmployeeRepository {
    public static async create(employee: Employee) {
        const employeeModel = new Model(employee)

        return employeeModel.save()
    }
    public static async getAll(){
        const employees = await Model.find({})
        
        return employees
    }
    public static async findByCpf(cpf: string) {
        return Model.find({ cpf })
    }
}