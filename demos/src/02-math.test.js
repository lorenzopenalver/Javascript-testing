const {
  sum, divide, multiply, subtract,
} = require('./02-math');

describe('Test for Math', () => {
  describe('Add', () => {
    test('adds 2 + 2 should be 4', () => {
      const rta = sum(2, 2);
      expect(rta).toBe(4);
    });
    describe('divide', () => {
      test('should divide', () => {
        const rta = divide(14, 2);
        expect(rta).toBe(7);
        const rta2 = divide(1, 2);
        expect(rta2).toBe(0.5);
      });
      test('divides for zero', () => {
        const rta = divide(0, 0);
        expect(rta).toBeNull();
        const rta2 = divide(1, 0);
        expect(rta2).toBeNull();
      });
    });
    describe('multiply', () => {
      test('multiplies 14 * 2 should be 28', () => {
        const rta = multiply(14, 2);
        expect(rta).toBe(28);
      });
    });
    describe('substract', () => {
      test('subtracts 11 - 2 should be 9', () => {
        const rta = subtract(11, 2);
        expect(rta).toBe(9);
      });
    });
  });
});
