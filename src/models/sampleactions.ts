import { Action } from './action';

export class SampleActions {
    actions: Action[];

    constructor() {
        this.initializeEmployees();
    }

    initializeEmployees() {
        this.actions = [
            { employeeId:1, title:"Call the Employee", plannedDate:"21-09-2017",isSuggested:true,usageCount:10 },
            { employeeId:2, title:"Call the Employee1", plannedDate:"22-09-2017",isSuggested:false,usageCount:15 },
            { employeeId:3, title:"Call the Employee2", plannedDate:"23-09-2017",isSuggested:true,usageCount:11 },
            { employeeId:4, title:"Call the Employee3", plannedDate:"24-09-2017",isSuggested:true,usageCount:21 },
            { employeeId:5, title:"Call the Employee4", plannedDate:"25-09-2017",isSuggested:false,usageCount:23 },
            { employeeId:6, title:"Call the Employee5", plannedDate:"26-09-2017",isSuggested:false,usageCount:21 },
            { employeeId:7, title:"Call the Employee6", plannedDate:"27-09-2017",isSuggested:true,usageCount:11 },
            { employeeId:8, title:"Call the Employee7", plannedDate:"28-09-2017",isSuggested:false,usageCount:16 }
        ];
    }
}