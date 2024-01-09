describe('Set', () => {
  beforeAll(() => {
    console.log('beforeAll');
  /* Se puede usar para iniciar una DB */
  });
  afterAll(() => {
    console.log('afterAll');
    /* Se puede usar para finalizar una DB */
  });
  beforeEach(() => {
    console.log('BeforeEach');
  });
  afterEach(() => {
    console.log('afterEach');
  });
  test('Case 1', () => {
    console.log('Case 1');
    expect(1 + 1).toBe(2);
  });
  test('Case 2', () => {
    console.log('Case 2');
    expect(1 + 3).toBe(4);
  });
  describe('Another Group', () => {
    beforeAll(() => {
      console.log('beforeAll 2');
    });
    afterAll(() => {
      console.log('afterAll 2');
    });
    test('Case 3', () => {
      console.log('Case 3');
      expect(1 + 1).toBe(2);
    });
    test('Case 4', () => {
      console.log('Case 4');
      expect(1 + 3).toBe(4);
    });
  });
});
