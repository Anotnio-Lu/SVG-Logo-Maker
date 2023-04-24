// Constructor is imported.
const svg = require('./shapes');

// A testing suite for Circle is created.
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

// A testing suite for Triangle is created.
describe('SVG', () => {
  // A test is created to check 
  describe('Triangle', () => {
    it('should take in 3 characters or less, a color keyword OR a hexadecimal number, a shape and a a color keyword OR a hexadecimal number for that shape', () => {
        var shape = new svg.Triangle("SVG", "red", "green", "31%");
        const output = `
<svg width="300" height="200">
    <polygon points="140,0 30,190 250,190" fill="green" />
    <text x="31%" y="75%" font-size="60" fill="red">SVG</text>
</svg>
        `
      expect(shape.render()).toEqual(output);
    });
  });
});

// A testing suite for Circle is created.
describe('SVG', () => {
  // A test is created to check 
  describe('Square', () => {
    it('should take in 3 characters or less, a color keyword OR a hexadecimal number, a shape and a a color keyword OR a hexadecimal number for that shape', () => {
        var shape = new svg.Square("SVG", "red", "green", "40%");
        const output = `
<svg width="300" height="200">
    <rect x="70" y="0" width="200" height="200" fill="green" />
    <text x="40%" y="55%"  font-size="60" fill="red">SVG</text>
</svg>
        `
      expect(shape.render()).toEqual(output);
    });
  });
});