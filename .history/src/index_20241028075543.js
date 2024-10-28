// index.js
const TriangleCalculator = require("./src/pages/TriangleCalculator");

function main() {
  const args = process.argv.slice(2);
  if (args.length !== 3) {
    console.log("Usage: node index.js <side1> <side2> <side3>");
    process.exit(1);
  }

  const calculator = new TriangleCalculator();
  calculator.createTriangle(args[0], args[1], args[2]);

  console.log("Is valid triangle:", calculator.validateTriangle());
  console.log("Triangle type:", calculator.getTriangleType());
}

if (require.main === module) {
  main();
}
