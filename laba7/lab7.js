class Employee {
	constructor(firstName, lastName, baseSalary, experience) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.baseSalary = baseSalary;
		this.experience = experience;
	}

	countedSalary() {
		if (this.experience > 5) {
			return this.baseSalary * 1.2 + 500;
		} else if (this.experience > 2) {
			return this.baseSalary + 200;
		} else {
			return this.baseSalary;
		}
	}
}

class Designer extends Employee {
	constructor(firstName, lastName, baseSalary, experience, effCoeff) {
		super(firstName, lastName, baseSalary, experience);
		this.effCoeff = effCoeff;
	}

	countedSalary() {
		return super.countedSalary() * this.effCoeff;
	}
}

class Manager extends Employee {
	constructor(firstName, lastName, baseSalary, experience, team) {
		super(firstName, lastName, baseSalary, experience);
		this.team = team;
	}

	countedSalary() {
		let baseSalary = super.countedSalary();
		const teamSize = this.team.length;
		const developersCount = this.team.filter(
			(employee) => employee instanceof Developer
		).length;
		const halfDevelopers = developersCount > teamSize / 2;

		if (teamSize > 10) {
			baseSalary += 300;
		} else if (teamSize > 5) {
			baseSalary += 200;
		}

		if (halfDevelopers) {
			baseSalary *= 1.1;
		}

		return baseSalary;
	}
}

class Department {
	constructor(managers) {
		this.managers = managers;
	}

	giveSalary() {
		for (const manager of this.managers) {
			console.log(`Manager: ${manager.firstName} ${manager.lastName}`);
			for (const employee of manager.team) {
				const salary = employee.countedSalary();
				console.log(
					`${employee.firstName} ${employee.lastName} отримав ${salary} шекелей`
				);
			}
			console.log();
		}
	}
}

// Приклад використання:
const dev1 = new Developer("John", "Doe", 3000, 3);
const dev2 = new Developer("Jane", "Smith", 4000, 6);
const designer = new Designer("Alice", "Johnson", 3500, 4, 0.8);
const manager = new Manager("Michael", "Brown", 5000, 7, [
	dev1,
	dev2,
	designer,
]);

const department = new Department([manager]);
department.giveSalary();
