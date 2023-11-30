describe('Polimorphism', () => {
  class Employee {
    constructor(public name: string = '') {}
  }
  class Manager extends Employee {}
  class VicePresident extends Manager {}

  function sayHello(employee: Employee) {
    console.info('Hello ' + employee.name);
  }

  it('should have polymorphism', () => {
    let employee = new Employee('John');
    console.info(employee.name);

    employee = new Manager('Doe');
    console.info(employee.name);

    employee = new VicePresident('Juna');
    console.info(employee.name);
  });

  it('should have polymorphism method', () => {
    sayHello(new Employee('John'));
    sayHello(new Manager('Doe'));
    sayHello(new VicePresident('Juna'));
  });
});
