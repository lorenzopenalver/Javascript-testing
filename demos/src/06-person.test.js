const Person = require('./06-person');

describe('Test for Person', () => {
  // Arange / Given
  let person;
  beforeEach(() => {
    person = new Person('Nicolas', 45, 1.7);
  });
  test('should return down', () => {
    // Arange / Given
    person.weight = 45;
    // Act / When
    const imc = person.calcIMC();
    // Assert / Then
    expect(imc).toBe('down');
  });

  test('should return normal', () => {
    person.weight = 59;
    const imc = person.calcIMC();
    expect(imc).toBe('normal');
  });
  test('should return overweight', () => {
    person.weight = 73;
    const imc = person.calcIMC();
    expect(imc).toBe('overweight');
  });
  test('should return overweight level 1', () => {
    person.weight = 79;
    const imc = person.calcIMC();
    expect(imc).toBe('overweight level 1');
  });
  test('should return overweight level 2', () => {
    person.weight = 90;
    const imc = person.calcIMC();
    expect(imc).toBe('overweight level 2');
  });
  test('should return overweight level 3', () => {
    person.weight = 120;
    const imc = person.calcIMC();
    expect(imc).toBe('overweight level 3');
  });
  test('should return no found', () => {
    person.weight = 1;
    const imc = person.calcIMC();
    expect(imc).toBe('no found');
  });
  test('should return not found', () => {
    person.weight = 'Perro';
    const imc = person.calcIMC();
    expect(imc).toBe('not found');
  });
});
