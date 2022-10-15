import Model from '../entities/input'
import { Revenue } from '../interfaces'

export class InputRepository {
    public static register(revenue: Revenue) {
        const registerYield = new Model(revenue)

        return registerYield.save()
    }
    public static async getAll() {
        const revenues  = await Model.find({})

        return revenues
    }
}