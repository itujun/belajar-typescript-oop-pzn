describe('Type Cast', () => {
  class Employee {
    constructor(public name: string = '') {}
  }
  class Manager extends Employee {}
  class VicePresident extends Manager {}

  function sayHei(employee: Employee): void {
    if (employee instanceof VicePresident) {
      const vp = employee as VicePresident;
      console.info('Hello VP ' + vp.name);
    } else if (employee instanceof Manager) {
      const m = employee as Manager;
      console.info('Hello Manager ' + m.name);
    } else {
      console.info('Hello Employee ' + employee.name);
    }
  }

  function sayHeiWrong(employee: Employee): void {
    if (employee instanceof Manager) {
      const m = employee as Manager;
      console.info('Hello Manager ' + m.name);
    } else if (employee instanceof VicePresident) {
      const vp = employee as VicePresident;
      console.info('Hello VP ' + vp.name);
    } else {
      console.info('Hello Employee ' + employee.name);
    }
  }

  it('should have type cast', () => {
    sayHei(new Employee('John'));
    sayHei(new Manager('Doe'));
    sayHei(new VicePresident('Juna'));
  });

  it('should have type cast wrong', () => {
    sayHeiWrong(new Employee('John'));
    sayHeiWrong(new Manager('Doe'));
    sayHeiWrong(new VicePresident('Juna'));
  });
});
