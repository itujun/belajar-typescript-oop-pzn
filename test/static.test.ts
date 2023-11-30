describe('Static', () => {
  class Confifuration {
    static NAME: string = 'Belajar Typepcript Oop Pzn';
    static DURATION: number = 2;
    static COMPLETED: boolean = true;
  }

  class MathUtils {
    static sum(...value: number[]): number {
      return value.reduce((a, b) => a + b);
    }
  }

  it('should have static', () => {
    console.info('Name', Confifuration.NAME);
    console.info('Duration', Confifuration.DURATION);
    console.info('Completed', Confifuration.COMPLETED);
  });

  it('should have static method', () => {
    console.info(MathUtils.sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
  });
});
