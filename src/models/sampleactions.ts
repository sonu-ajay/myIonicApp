import { Action } from './action';

export class SampleActions {
    actions: Action[];

    constructor() {
        this.initializeEmployees();
    }

    initializeEmployees() {
        this.actions = [
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