import { Revenue } from '../interfaces';
import { InputRepository } from '../repository/revenue'

export class InputService {
    public static registerYield(reqBody: Revenue) {
       return InputRepository.register(reqBody); 
    }
    public static getAllRevenues() {
        return InputRepository.getAll();
    }
}