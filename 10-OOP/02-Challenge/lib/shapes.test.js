
// jest tests for shapes
const { Circle, Square, Triangle } = require('./shapes');

describe('Shape', () => {
      describe('Circle', () => {
            test("should render the correct markup for Circle", () => {
                  const shape = new Circle;

                  const expectedToBeSvg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`;
                  expect(shape.render()).toBe(expectedToBeSvg)
            })
      })
      describe('Square', () => {
            test("should render the correct markup for Square", () => {
                  const shape = new Square;

                  const expectedToBeSvg = `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">
<rect x="50" y="50" width="200" height="200" fill="${this.shapeColor}" />
<text x="150" y="170" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`;
                  expect(shape.render()).toBe(expectedToBeSvg)
            })
      })
      describe('Triangle', () => {
            test("should render the correct markup Triangle", () => {
                  const shape = new Triangle;

                  const expectedToBeSvg = `<svg version="1.1" width="900" height="500" xmlns="http://www.w3.org/2000/svg">
<polygon points="200,150 80,380 320,380" fill="${this.shapeColor}" />
<text x="200" y="325" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`;
                  expect(shape.render()).toBe(expectedToBeSvg)
            })
      })
})











// sample test code:



// shape.setColor("blue");
// expect(shape.render()).toEqual(
//   '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
// );

// // Constructor Arithmetic is imported.
// const Arithmetic = require('../arithmetic.js');

// // A testing suite for Arithmetic is created.
// describe('Arithmetic', () => {
//   // Several tests are created to check that modulus does in fact return the remainder of the quotient of the two numbers.
//   // This test checks to see if 2 % 2 has a remainder of 0 and returns 0.
//   describe('modulus', () => {
//     it('should calculate 2 % 2 and return 0 as the remainder', () => {
//       const total = 0;
//       const arithmetic = new Arithmetic();
//       expect(arithmetic.modulus(2, 2)).toEqual(total);
//     });

//     // This test checks to see if 3 % 2 has a remainder of 1 and returns 1.
//     it('should calculate 3 % 2 and return 1 as the remainder', () => {
//       const total = 1;
//       const arithmetic = new Arithmetic();
//       expect(arithmetic.modulus(3, 2)).toEqual(total);
//     });

//     // This test checks to see if 10 % 6 has a remainder of 4 and returns 4.
//     it('should calculate 10 % 6 and return 4 as the remainder', () => {
//       const total = 4;
//       const arithmetic = new Arithmetic();
//       expect(arithmetic.modulus(10, 6)).toEqual(total);
//     });
//   });
// });


