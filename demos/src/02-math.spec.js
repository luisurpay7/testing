const { divide } = require('./02-math');

test('should divide', () => {
  const rta = divide(6, 0);
  // expect(rta).toBe(4);
  expect(rta).toBeNull();
  const rta2 = divide(25, 0);
  expect(rta2).toBe(null);
});
