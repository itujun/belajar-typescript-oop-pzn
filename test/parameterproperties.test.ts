describe('Parameter Properties', () => {
  class Person {
    constructor(public name: string = '') {}
  }
  it('should have parameter properties', () => {
    const person = new Person();
    person.name = 'Junn';
    console.info(person.name);
  });
});
