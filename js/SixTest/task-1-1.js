class Worker {
    constructor({name, surname, rate, workingDays}) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.workingDays = workingDays;
        // - name: string - имя;
        // - surname: string - фамилия;
        // rate: number - ставка за день в долларах;
        // workingDays: number - количество отработанных дней;
    }

    getSalary() {
        const salary = this.rate * this.workingDays;
        console.log(`Your salary in this month ${salary}`);
    }
}

const workMan = new Worker({name: "Сергей", surname: "Семенюк", rate: 10, workingDays: 15});

console.log(workMan);
workMan.getSalary();