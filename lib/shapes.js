
class Triangle{
    constructor(text, textColor, shapeColor, position) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
        this.position = position
    }
    setColor(color) {
        this.shapeColor = color;
      }
      render(){
        return `
<svg width="300" height="200">
    <polygon points="140,0 30,190 250,190" fill="` + this.shapeColor + `" />
    <text x="` + this.position + `" y="75%" font-size="60" fill="` + this.textColor + `">`+this.text+`</text>
</svg>
        `
    }
}

class Circle{
    constructor(text, textColor, shapeColor, position) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
        this.position = position
    }
    setColor(color) {
        this.shapeColor = color;
      }
    render(){
        return `
<svg width="300" height="200">
    <circle cx="100" cy="100" r="100" fill="` + this.shapeColor + `" />
    <text x="` + this.position + `" y="55%" font-size="60" fill="` + this.textColor + `">`+this.text+`</text>
</svg>
        `
    }
}

class Square{
    constructor(text, textColor, shapeColor, position) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
        this.position = position
    }
    setColor(color) {
        this.shapeColor = color;
      }
    render(){
        return `
<svg width="300" height="200">
    <rect x="70" y="0" width="200" height="200" fill="` + this.shapeColor + `" />
    <text x="` + this.position + `" y="55%"  font-size="60" fill="` + this.textColor + `">`+this.text+`</text>
</svg>
        `
    }
}


module.exports = {
    Triangle,
    Circle,
    Square
}

