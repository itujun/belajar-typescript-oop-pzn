describe('Error Handling', () => {
  class ValidationError extends Error {
    constructor(message: string) {
      super(message);
    }
  }

  function doubleIt(x: number): number {
    if (x < 0) throw new ValidationError('Value cannot be less than zero');
    return x * 2;
  }

  it('should try catch error', () => {
    try {
      const res = doubleIt(-1);
      // const res = doubleIt(6);
      console.info(res);
    } catch (e) {
      if (e instanceof ValidationError) {
        console.info(e.message);
      }
    }
  });
});
