import { Job } from '../interfaces';
import { JobRepository } from '../repository/job'

export class JobService {
    public static getAll() {
       return JobRepository.getAll(); 
    }
    public static create(jobs: Job[]) {
        return JobRepository.create(jobs); 
     }
}