import { PaymentMethod } from '../interfaces';
import { PaymentMethodRepository } from '../repository/payment-method'

export class PaymentMethodService {
    public static getAll() {
       return PaymentMethodRepository.getAll(); 
    }
    public static create(payment: PaymentMethod) {
        return PaymentMethodRepository.create(payment); 
    }
    public static getById(id: string) {
        return PaymentMethodRepository.getById(id);
    } 
}