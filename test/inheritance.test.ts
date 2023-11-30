describe('Inheritance', () => {
  class Employee {
    _name: string;

    constructor(name: string) {
      this._name = name;
    }
  }

  class Manager extends Employee {}

  class Director extends Manager {}

  it('should support inheritance class', () => {
    const employee: Employee = new Employee('Budi');
    console.info('employee', employee._name);

    const manager = new Manager('Lana');
    console.info('manager', manager._name);

    const director = new Director('Juna');
    console.info('director', director._name);
  });
});
