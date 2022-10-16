import Model from '../entities/revenue'
import { Revenue } from '../interfaces'

export class RevenueRepository {
    public static register(revenue: Revenue) {
        const revenueModel = new Model(revenue)

        return revenueModel.save()
    }
    public static async getAll() {
        const revenues  = await Model.find({})

        return revenues
    }
    public static async getByDate(date: string) {
        const revenues = await Model.find({ date })

        return revenues
    }
}