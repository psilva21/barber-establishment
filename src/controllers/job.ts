import express, { Response, Request, NextFunction } from 'express'
import { Job, JobCreation } from '../interfaces';
import { JobService } from '../services/job'
import JobValidator from '../validators/job';

const router = express.Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const jobs = await  JobService.getAll();

        return res.status(200).send(jobs);
    } catch(err) {
        next(err);
    }
})

router.post('/', JobValidator.create, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const jobsTitle = <JobCreation>req.body;

        const jobsCreated = await JobService.create(jobsTitle.jobs)

        return res.status(200).send(jobsCreated);
    } catch(err) {
        next(err);
    }
})

export default router;