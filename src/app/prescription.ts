import { DrugDetails } from "./drug-details";

export class Prescription {
    insurancePolicyNumber:string;
    insuranceProvider:string;
    prescriptionDate:string;
    drugs:DrugDetails[];
    dosageDefinitionPerDay:string;
    prescriptionCourse:string;
    doctorDetails:string;
}
