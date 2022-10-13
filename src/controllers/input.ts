import express, { Request, Response } from 'express';

const router = express.Router()

router.post('/', function(req: Request, res: Response) {
    console.log(req.body)
})

export default router