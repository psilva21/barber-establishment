import express, { NextFunction, Request, Response } from 'express';
import { Revenue } from '../interfaces';
import { InputService } from '../services/revenue';
import RevenueValidator from '../validators/revenue';

const router = express.Router()

router.post('/', RevenueValidator.create, async function(req: Request, res: Response, next: NextFunction) {
    try {
        const revenue = <Revenue>req.body
        const createdRevenue = await InputService.registerYield(revenue)
    
        return res.status(200).send(createdRevenue)
    } catch (err) {
        next(err)
    }
})

router.get('/', async function(req: Request, res: Response, next: NextFunction) {
    try {
        const revenues = await InputService.getAllRevenues()

        return res.status(200).send(revenues)
    } catch (err) {
        next(err)
    }
})

export default router