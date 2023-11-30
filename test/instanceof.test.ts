describe('Instance Of Operator', () => {
  class Employee {}
  class Manager {}
  it('should have instance of operator', () => {
    const budi = new Employee();
    const joko = new Manager();

    console.info(budi instanceof Employee);
    console.info(budi instanceof Manager);
    console.info(joko instanceof Employee);
    console.info(joko instanceof Manager);
  });
});
