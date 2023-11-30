describe('Method Overriding', () => {
  class Employee {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    sayHello(name: string): void {
      console.info(`Hello ${name}, my name is ${this.name}`);
    }
  }

  class Manager extends Employee {
    sayHello(name: string): void {
      // console.info(`Hello ${name}, my name is ${this.name}, I'm your manager`);
      super.sayHello(name);
      console.info('And I am your manager');
    }
  }

  it('should support method overriding', () => {
    const employee = new Employee('Tono');
    employee.sayHello('Budi');

    const manager = new Manager('Juna');
    manager.sayHello('Budi');
  });

  it('should support super method', () => {
    const employee = new Employee('Tono');
    employee.sayHello('Budi');

    const manager = new Manager('Juna');
    manager.sayHello('Budi');
  });
});
