const calculateDiscriminant = require('./function.js');

test('дискриминант для 3x^2 + 5x + 8 равен -71', () => {
	expect(calculateDiscriminant(3, 5, 8)).toBe(-71);
});

test('дискриминант для 1x^2 - 3x + 2 равен 1', () => {
	expect(calculateDiscriminant(1, -3, 2)).toBe(1);
});

test('дискриминант для 2x^2 + 4x + 1 равен 8', () => {
	expect(calculateDiscriminant(2, 4, 1)).toBe(8);
});

test('дискриминант для -1x^2 + 5x - 6 равен 1', () => {
	expect(calculateDiscriminant(-1, 5, -6)).toBe(1);
});