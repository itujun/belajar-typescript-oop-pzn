describe('Visibility', () => {
  class Counter {
    // private counter: number = 0;
    protected counter: number = 0;

    public increment() {
      this.counter++;
    }

    getCounter(): void {
      console.info(this.counter);
    }
  }

  class DoubleCounter extends Counter {
    increment(): void {
      this.counter += 2;
    }
  }

  it('private visibility', () => {
    const counter = new Counter();
    counter.increment();
    counter.increment();
    counter.increment();
    counter.increment();
    counter.getCounter();
  });

  it('protected visibility', () => {
    const counter = new DoubleCounter();
    counter.increment();
    counter.increment();
    counter.increment();
    counter.increment();
    counter.getCounter();
  });
});
