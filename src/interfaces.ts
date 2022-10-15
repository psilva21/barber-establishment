import { Payments } from "./enums";

export interface Revenue {
    registrationDate: string;
    yieldType: string;
    description: string;
    value: number;
    payment: Payments; 
    responsible: string;
}