describe('Class', () => {
  class Customer {
    constructor() {
      console.info('Create new Customer');
    }
  }

  class Order {}

  it('should can create class', () => {
    const customer: Customer = new Customer();
    const oreder = new Order();
  });

  it('should can create constructors', () => {
    new Customer();
    new Customer();
  });
});
