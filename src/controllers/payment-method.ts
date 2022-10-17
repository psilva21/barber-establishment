import express, { Response, Request, NextFunction } from 'express'
import { PaymentMethod } from '../interfaces';
import { PaymentMethodService } from '../services/payment-method'
import PaymentMethodValidator from '../validators/payment-method';

const router = express.Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const paymentMethods = await  PaymentMethodService.getAll();

        return res.status(200).send(paymentMethods);
    } catch(err) {
        next(err);
    }
})

router.post('/', PaymentMethodValidator.create, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const paymentMethod = <PaymentMethod>req.body;

        const paymentCreated = await PaymentMethodService.create(paymentMethod)

        return res.status(200).send(paymentCreated);
    } catch(err) {
        next(err);
    }
})

export default router;