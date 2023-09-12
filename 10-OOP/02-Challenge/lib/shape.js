class Shape {
      constructor(text, textColor, shape, shapeColor) {
            this.text = text;
            this.textColor = textColor;
            this.shape = shape;
            this.shapeColor = shapeColor;
      }

      // Setters for shape properties
      setText(text) {
            this.text = text;
      }

      setTextColor(textColor) {
            this.textColor = textColor;
      }

      setShape(shape) {
            this.shape = shape;
      }

      setShapeColor(shapeColor) {
            this.shapeColor = shapeColor;
      }

      // Generate and return the SVG string for the shape
      render() {
            let shapeType = '';

            if (this.shape === 'rectangle') {
                  shapeType = 'rect';
            } else if (this.shape === 'triangle') {
                  shapeType = 'polygon';
            } else {
                  shapeType = 'circle';
            }

            if (this.shape === 'circle') {
                  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <${shapeType} cx="150" cy="100" r="80" fill="${this.shapeColor}" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
          </svg>`;
            } else if (this.shape === 'rectangle') {
                  return `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">
            <${shapeType} x="50" y="50" width="200" height="200" fill="${this.shapeColor}" />
            <text x="150" y="170" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
          </svg>`;
            } else {
                  return `<svg version="1.1" width="900" height="500" xmlns="http://www.w3.org/2000/svg">
            <${shapeType} points="200,150 80,380 320,380" fill="${this.shapeColor}" />
            <text x="200" y="325" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
          </svg>`;
            }
      }
}

module.exports = Shape;