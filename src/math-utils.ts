export namespace MathUtils {
  export const PI = 3.14;

  export function sum(...values: number[]): number {
    return values.reduce((a, b) => a + b);
  }
}
