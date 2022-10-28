import BigNumber from "bignumber.js";

export function solveGrid(x: number, y: number): BigNumber {
  let solved: boolean = false;
  let count: BigNumber = new BigNumber(1);
  const maxSize: BigNumber = new BigNumber(2).exponentiatedBy(
    new BigNumber(x * y)
  );

  while (!solved && count.comparedTo(maxSize) <= 0) {
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

    count = count.plus(1);
  }

  return count.minus(1);
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
