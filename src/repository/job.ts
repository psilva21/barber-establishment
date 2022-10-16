import Model from '../entities/job'
import { Job } from '../interfaces'

export class JobRepository {
    public static async getAll() {
        const jobs  = await Model.find({})

        return jobs
    }
    public static async create(jobs: Job[]){
        const models = jobs.map(job => new Model(job))
        const created = Model.insertMany(models)
        
        return created
    }
}