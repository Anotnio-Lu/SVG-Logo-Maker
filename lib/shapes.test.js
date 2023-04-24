// Constructor is imported.
const svg = require('./shapes');

// A testing suite for Arithmetic is created.
describe('SVG', () => {
  // A test is created to check 
  describe('Circle', () => {
    it('should take in 3 characters or less, a color keyword OR a hexadecimal number, a shape and a a color keyword OR a hexadecimal number for that shape', () => {
        var shape = new svg.Circle("SVG", "red", "green", "20%");
        const output = `
<svg width="300" height="200">
    <circle cx="100" cy="100" r="100" fill="green" />
    <text x="20%" y="55%" font-size="60" fill="red">SVG</text>
</svg>
        `
      expect(shape.render()).toEqual(output);
    });
  });
});


//response.text.toUpperCase(), response.textColor, response.shapeColor, position