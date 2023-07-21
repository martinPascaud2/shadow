const [W, H] = readline().split(" ").map(Number);

const N = parseInt(readline());

const [X0, Y0] = readline().split(" ").map(Number);

let position = { row: X0, line: Y0 }; //batman's position
let area = { row: { min: 0, max: W - 1 }, line: { min: 0, max: H - 1 } }; // where to search

while (true) {
  const bombDir = readline();

  const [isRight, isLeft, isUp, isDown] = ["R", "L", "U", "D"].map((letter) =>
    bombDir.includes(letter)
  );

  const goTo = (axis) => {
    let nextPosition;
    if ((isRight && axis === "row") || (isDown && axis === "line")) {
      area[axis].min = position[axis];
      nextPosition = Math.ceil((area[axis].max + position[axis]) / 2);
    } else if ((isLeft && axis === "row") || (isUp && axis === "line")) {
      area[axis].max = position[axis];
      nextPosition = Math.floor((area[axis].min + position[axis]) / 2);
    } else {
      return position[axis];
    }
    return nextPosition;
  };

  const nextRow = goTo("row");
  const nextLine = goTo("line");

  position = { row: nextRow, line: nextLine };
  console.log(nextRow, nextLine);
}
