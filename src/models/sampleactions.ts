import { Action } from './action';

export class SampleActions {
    actions: Action[];

    constructor(empname: string) {
        this.initializeEmployees(empname);
    }

    initializeEmployees(empname) {
        this.actions = [
            { employeeId: 1, title: "Call the Employee: " + empname, plannedDate: "21-09-2017", isSuggested: true, usageCount: 10 },
            { employeeId: 2, title: "Call the Employee1: " + empname, plannedDate: "22-09-2017", isSuggested: false, usageCount: 15 },
            { employeeId: 3, title: "Call the Employee2: " + empname, plannedDate: "23-09-2017", isSuggested: true, usageCount: 11 },
            { employeeId: 4, title: "Call the Employee3: " + empname, plannedDate: "24-09-2017", isSuggested: true, usageCount: 21 },
            { employeeId: 5, title: "Call the Employee4: " + empname, plannedDate: "25-09-2017", isSuggested: false, usageCount: 23 },
            { employeeId: 6, title: "Call the Employee5: " + empname, plannedDate: "26-09-2017", isSuggested: false, usageCount: 21 },
            { employeeId: 7, title: "Call the Employee6: " + empname, plannedDate: "27-09-2017", isSuggested: true, usageCount: 11 },
            { employeeId: 8, title: "Call the Employee7: " + empname, plannedDate: "28-09-2017", isSuggested: false, usageCount: 16 }
        ];
    }
}