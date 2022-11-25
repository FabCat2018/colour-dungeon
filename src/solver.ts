import BigNumber from "bignumber.js";

export function runSolver(x: number, y: number) {
  const solutions = solveGrid(x, y);
  solutions.forEach((solution) => console.log(solution));
}

function solveGrid(x: number, y: number): Array<string> {
  let solutions = [];
  let solved: boolean = false;
  let count: BigNumber = new BigNumber(1);
  const maxSize: BigNumber = new BigNumber(2)
    .exponentiatedBy(new BigNumber(x * y))
    .minus(1);

  while (count.comparedTo(maxSize) <= 0) {
    if (count.mod(10000).isEqualTo(0)) {
      console.log(count.div(maxSize).times(100).toFixed(2), "%");
    }
    const matrix: Array<Array<boolean>> = new Array(x)
      .fill([])
      .map((cell) => new Array(y).fill(false));

    let countCopy = new BigNumber(count);

    let newCount: number = 0;
    while (countCopy.gt(0)) {
      const shouldFill: boolean = countCopy.mod(2).isEqualTo(1);
      const xCoord = Math.floor(newCount / y);
      const yCoord = newCount % y;
      if (shouldFill) flipMatrixCells(matrix, xCoord, yCoord, x, y);
      countCopy = countCopy.dividedToIntegerBy(2);
      newCount += 1;
    }

    solved = true;
    for (let i = 0; i < x; i++) {
      for (let j = 0; j < y; j++) {
        solved = solved && matrix[i][j];
      }
    }

    if (solved) {
      solutions.push(mapBinaryToGrid(convertToBinary(count), x, y));
    }

    count = count.plus(1);
  }

  return solutions;
}

function flipMatrixCells(
  matrix: Array<Array<boolean>>,
  x: number,
  y: number,
  xMax: number,
  yMax: number
): void {
  flipIndividualCell(x, y);

  if (x + 1 < xMax) {
    flipIndividualCell(x + 1, y);
  }

  if (y + 1 < yMax) {
    flipIndividualCell(x, y + 1);
  }

  if (x - 1 > -1) {
    flipIndividualCell(x - 1, y);
  }

  if (y - 1 > -1) {
    flipIndividualCell(x, y - 1);
  }

  function flipIndividualCell(xIndex: number, yIndex: number) {
    matrix[xIndex][yIndex] = !matrix[xIndex][yIndex];
  }
}

function convertToBinary(n: BigNumber): string {
  let copyN = BigNumber(n);
  let result: string = "";

  while (copyN.gt(0)) {
    const shouldFill: boolean = copyN.mod(2).isEqualTo(1);
    result = (shouldFill ? "1" : "0") + result;
    copyN = copyN.dividedToIntegerBy(2);
  }
  return result;
}

function mapBinaryToGrid(
  n: string,
  columnLength: number,
  rowLength: number
): string {
  let gridString = "";
  let totalLength = columnLength * rowLength;

  for (let i: number = n.length; i < totalLength; i++) {
    gridString = "0" + gridString;
  }

  let count = totalLength - n.length;

  for (let i: number = 0; i < n.length; i++) {
    if (count % rowLength === 0) {
      gridString += "\n";
    }
    gridString += n[i];
    count++;
  }

  return gridString;
}
