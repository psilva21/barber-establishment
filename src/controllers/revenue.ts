import express, { NextFunction, Request, Response } from 'express';
import { Revenue } from '../interfaces';
import { RevenueService } from '../services/revenue';
import RevenueValidator from '../validators/revenue';

const router = express.Router()

router.post('/', RevenueValidator.create, async function(req: Request, res: Response, next: NextFunction) {
    try {
        const revenue = <Revenue>req.body
        const createdRevenue = await RevenueService.register(revenue)
    
        return res.status(200).send(createdRevenue)
    } catch (err) {
        next(err)
    }
})

router.get('/', RevenueValidator.filter, async function(req: Request, res: Response, next: NextFunction) {
    try {

        const filterDate = req.query.filterDate as string

        if (filterDate) {
            const revenues = await RevenueService.getByDate(decodeURIComponent(filterDate))

            return res.status(200).send(revenues)
        }

        const revenues = await RevenueService.getAll()

        return res.status(200).send(revenues)
    } catch (err) {
        next(err)
    }
})

export default router