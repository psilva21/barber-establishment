import express, { Response, Request, NextFunction } from 'express'
import { Employee } from '../interfaces';
import { EmployeeService } from '../services/employee'
import EmployeeValidator from '../validators/employee';

const router = express.Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const employees = await  EmployeeService.getAll();

        return res.status(200).send(employees);
    } catch(err) {
        next(err);
    }
})

router.post('/', EmployeeValidator.create, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const employee = <Employee>req.body;

        const employCreated = await EmployeeService.create(employee)

        return res.status(200).send(employCreated);
    } catch(err) {
        next(err);
    }
})

export default router;