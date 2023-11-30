describe('Abstract', () => {
  abstract class Customer {
    readonly id: number;
    abstract name: string;

    constructor(id: number) {
      this.id = id;
    }

    abstract sayHello(name: string): void;
  }

  class RegulerCustomer extends Customer {
    name: string;
    constructor(id: number, name: string) {
      super(id);
      this.name = name;
    }

    sayHello(name: string): void {
      console.info(`Hello ${name}, I'm ${this.name}`);
    }
  }

  it('Should be abstract', () => {
    // const customer = new Customer();
    const customer = new RegulerCustomer(2, 'Joe');
    customer.sayHello('Doe');
  });
});
