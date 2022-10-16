import { Revenue } from '../interfaces';
import { RevenueRepository } from '../repository/revenue'

export class RevenueService {
    public static register(reqBody: Revenue) {
       return RevenueRepository.register(reqBody); 
    }
    public static getAll() {
        return RevenueRepository.getAll();
    }
    public static getByDate(date: string) {
        return RevenueRepository.getByDate(date);
    }
}