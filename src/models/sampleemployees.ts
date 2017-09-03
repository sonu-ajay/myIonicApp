import { Employee } from './employee';

export class SampleEmployees {
    employees: Employee[];

    constructor() {
        this.initializeEmployees();
    }

    initializeEmployees() {
        this.employees = [
            { employeeId:1, icon: "assets/ajay.jpg", name: "Ajay Kumar Singh", personalCode: "123",department:"Mlm-Dev", leaveStartDate: "22-July-2017",leavePercentage:60,contactnumber:"9471770860" },
            { employeeId:2, icon: "assets/icon/cheetah.jpg", name: "Juned Jahangirdar", personalCode: "456",department:"Mlm-Dev", leaveStartDate: "22-July-2017",leavePercentage:60,contactnumber:"9611227506" },
            { employeeId:3, icon: "assets/mayank.jpg", name: "Mayank Shekhar", personalCode: "678",department:"Mlm-Dev", leaveStartDate: "22-July-2017",leavePercentage:60,contactnumber:"9886034331" },
            { employeeId:4, icon: "assets/rohit.jpg", name: "Rohit Tiwari", personalCode: "911",department:"Mlm-Dev", leaveStartDate: "22-July-2017",leavePercentage:60,contactnumber:"9636290808" },
            { employeeId:5, icon: "assets/satish.jpg", name: "Satish Vekatakrishnan", personalCode: "1213",department:"Mlm-SLA", leaveStartDate: "22-July-2017",leavePercentage:60,contactnumber:"9731182312"},
            { employeeId:6, icon: "assets/likhit.jpg", name: "Likhit Raj", personalCode: "1415",department:"Mlm-SLA", leaveStartDate: "22-July-2017",leavePercentage:60,contactnumber:"7204749712" },
            { employeeId:7, icon: "assets/sai.jpg", name: "Sai Kumar Chilamkoti", personalCode: "1617",department:"Mlm-SLA", leaveStartDate: "22-July-2017",leavePercentage:60,contactnumber:"9620531019" },
            { employeeId:8, icon: "assets/jacob.jpg", name: "Jacob Kochekkan", personalCode: "1819",department:"Mlm-SLA", leaveStartDate: "22-July-2017",leavePercentage:60,contactnumber:"8197731030" }
        ];
    }
}