import Model from '../entities/payment-method'
import { PaymentMethod } from '../interfaces'

export class PaymentMethodRepository {
    public static async create(payment: PaymentMethod) {
        const paymentModel = new Model(payment)

        return paymentModel.save()
    }
    public static async getAll(){
        const paymentMethods = await Model.find({})
        
        return paymentMethods
    }
    public static async getById(id: string){
        const payment = await Model.findOne({ _id: id})

        return payment
    }

}