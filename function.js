function calculateDiscriminant(a, b, c) {
	return b * b - 4 * a * c;
}
console.log("Дискриминант:", calculateDiscriminant(3, 5, 8));

module.exports = calculateDiscriminant;