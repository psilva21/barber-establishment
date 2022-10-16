import { Payments } from "./enums";

export interface Revenue {
    date: string;
    type: string;
    description: string;
    value: number;
    payment: Payments; 
    responsible: string;
}

export interface Job {
    title: string;
}

export interface JobCreation {
    jobs: Job[];
}