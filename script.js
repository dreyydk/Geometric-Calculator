let option = 0;

function triangleCalc(base, height) {
  return (base * height) / 2;
}

function rectangleCalc(base, height) {
  return base * height;
}

function squareCalc(side) {
  return side * side;
}

function trapezoidCalc(biggerBase, smallerBase, height) {
  return ((biggerBase + smallerBase) * height) / 2;
}

function circleCalc(radius) {
  return 3.14 * (radius * radius);
}

do {
  option = parseInt(
    window.prompt(
      "Welcome! Please choose one of the options below.\n\n1) Triangle area.\n2) Rectangle area.\n3) Square area.\n4) Trapezoid area.\n5) Circle area.\n6) Shut down."
    )
  );
  switch (option) {
    case 1:
      let triangleBase = parseFloat(window.prompt("Enter the base value:"));
      let triangleHeight = parseFloat(window.prompt("Enter the height value:"));
      let triangleResult = triangleCalc(triangleBase, triangleHeight);
      window.alert("The area of the triangle is " + triangleResult + "!");
      break;
    case 2:
      let rectangleBase = parseFloat(window.prompt("Enter the base value:"));
      let rectangleHeight = parseFloat(
        window.prompt("Enter the height value:")
      );
      let rectangleResult = rectangleCalc(rectangleBase, rectangleHeight);
      window.alert("The area of the rectangle is " + rectangleResult + "!");
      break;
    case 3:
      let squareSide = parseFloat(window.prompt("Enter the sides value:"));
      let squareResult = squareCalc(squareSide);
      window.alert("The area of the square is " + squareResult + "!");
      break;
    case 4:
      let smallerBase = parseFloat(
        window.prompt("Enter the smaller base value:")
      );
      let biggerBase = parseFloat(
        window.prompt("Enter the bigger base value:")
      );
      let trapezoidHeight = parseFloat(
        window.prompt("Enter the height value:")
      );
      let trapezoidResult = trapezoidCalc(
        biggerBase,
        smallerBase,
        trapezoidHeight
      );
      window.alert("The area of the trapezoid is " + trapezoidResult + "!");
      break;
    case 5:
      let circleRadius = parseFloat(window.prompt("Enter the radius value:"));
      let circleResult = circleCalc(circleRadius);
      window.alert("The area of the circle is " + circleResult + "!");
      break;
    case 6:
      window.alert("Shutting down...");
      break;
    default:
      window.alert("Please select a number between 1 and 6!");
      break;
  }
} while (option !== 6);
