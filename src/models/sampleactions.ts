import { Action } from './action';

export class SampleEmployees {
    employees: Action[];

    constructor() {
        this.initializeEmployees();
    }

    initializeEmployees() {
        this.employees = [
            { employeeId:1, title:"Call the Employee", plannedDate:"21-09-1992",isSuggested:true,usageCount:10 },
            { employeeId:1, title:"Call the Employee", plannedDate:"21-09-1992",isSuggested:true,usageCount:10 },
            { employeeId:1, title:"Call the Employee", plannedDate:"21-09-1992",isSuggested:true,usageCount:10 },
            { employeeId:1, title:"Call the Employee", plannedDate:"21-09-1992",isSuggested:true,usageCount:10 },
            { employeeId:1, title:"Call the Employee", plannedDate:"21-09-1992",isSuggested:true,usageCount:10 },
            { employeeId:1, title:"Call the Employee", plannedDate:"21-09-1992",isSuggested:true,usageCount:10 },
            { employeeId:1, title:"Call the Employee", plannedDate:"21-09-1992",isSuggested:true,usageCount:10 },
            { employeeId:1, title:"Call the Employee", plannedDate:"21-09-1992",isSuggested:true,usageCount:10 }
        ];
    }
}