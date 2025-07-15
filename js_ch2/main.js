
// create two employee objects with properties and methods
employee1 = {
    fullName: "Ali hasan",
    monthlySalary: 5000,
    department: {
        main: "IT",
        sub: "developer"
    },
    getAnnualSalary: function () {
        return this.monthlySalary * 12;
    },

}

employee2 = {
    fullName: "issa hasan",
    monthlySalary: 10000,
    department: {
        main: "HR",
        sub: "Recruitment"
    },
    getAnnualSalary: function () {
        return this.monthlySalary * 12;
    },

}

// create functions to calculate bonus and total salary
function addBonus(bonusPercentage) {
    const bonus = this.getAnnualSalary() * bonusPercentage;  
    const total = this.getAnnualSalary() + bonus;

    return total;
}

// create a function to calculate bonus and total salary with tip
function addBonusAndTip(bonusPercentage, tip) {
    const bonus = this.getAnnualSalary() * bonusPercentage;  
    const total = this.getAnnualSalary() + bonus +tip;

    return total
}

// create a function to print employee information
function printEmployeeInfo() {
    console.log(`\nEmployee : ${this.fullName} works in ${this.department.main} as ${this.department.sub}`);
    console.log(`Base Salary: ${this.monthlySalary}`);
    console.log(`Annual Salary: ${this.getAnnualSalary()}`);
}

// use call and apply to invoke functions with different contexts
const employee1Total = addBonus.call(employee1, 0.1); 
const employee2Total = addBonusAndTip.apply(employee2, [0.2, 8000]); 

// use bind to create a new function with a specific context
// and invoke it later
const boundPrint = printEmployeeInfo.bind(employee1);
boundPrint();

// destructure employee2 object to extract properties

const {
    fullName,
    monthlySalary,
    department: { main, sub }
} = employee2;

// print employee2 information using destructured properties
console.log(`\n Employee: ${fullName}`);
console.log(`Main Dept: ${main}`);
console.log(`Sub Dept: ${sub}`);
console.log(`Base Salary: ${monthlySalary}`);
console.log(`Total (with Bonus and Tip): ${employee2Total}`);