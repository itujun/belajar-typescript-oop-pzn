describe('Properties', () => {
  class Customer {
    readonly id: number;
    name: string = 'Guest';
    age?: number;
    constructor(id: number, name: string) {
      this.id = id;
      this.name = name;
    }
  }

  it('should can have properties', () => {
    const customer: Customer = new Customer(12, 'Juna');
    customer.age = 18;

    console.info('customer', customer);
    console.info('customer.id', customer.id);
    console.info('customer.name', customer.name);
    console.info('customer.age', customer.age);
  });
});
