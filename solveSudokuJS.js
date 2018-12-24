/**
 * 
 */
function solve() {
    var sudokuArray = [];
    for (var i = 0; i < 81; i++) {
        sudokuArray.push(sudokuDate);
        sudokuArray[i].answer = document.getElementsByName("n" + i).values;
    }

    var temp = 1;

    while (temp != 0) {
        temp = 0;
        for (var i = 0, x, y; i < 9; i++) {
            for (var j = 0; j < 81; j++) {
                if (sudokuArray[j].answer == i + 1) {
                    x = j / 9;
                    for (var k = 0; k < 9; k++) {
                        if (sudokuArray[x * 9 + k].answer == 0) {
                            sudokuArray[x * 9 + k].banNumber=i+1;
                        }
                        if (sudokuArray[j % 9 + k * 9].answer == 0) {
                            sudokuArray[j % 9 + k * 9].banNumber=i+1;
                        }
                    }
                }
            }

            for (var j = 0; j < 9; j++) {
                x = 0;
                y = 0;
                for (var k = 0; k < 9; k++) {
                    if (sudokuArray[j * 9 + k].answer == 0 && sudokuArray[j * 9 + k].banNumber != i + 1) {
                        x++;
                        y = j * 9 + k;
                    } else if (sudokuArray[j * 9 + k].answer == i + 1) {
                        x = 2;
                    }
                }
                if (x == 1) {
                    sudokuArray[y].answer=i+1;
                    temp++;
                }
            }
            for (var j = 0; j < 9; j++) {
                x = 0;
                y = 0;
                for (var k = 0; k < 9; k++) {
                    if (sudokuArray[j + k * 9].answer == 0 && sudokuArray[j + k * 9].banNumber != i + 1) {
                        x++;
                        y = j + k * 9;
                    } else if (sudokuArray[j + k * 9].answer == i + 1) {
                        x = 2;
                    }
                }
                if (x == 1) {
                    sudokuArray[y].answer=i+1;
                    temp++;
                }
            }

            for (var j = 0; j < 9; j++) {
                x = 0;
                y = 0;
                for (var k = 0; k < 9; k++) {
                    if (sudokuArray[j / 3 * 27 + j % 3 * 3 + k / 3 * 9 + k % 3].answer == 0 &&
                        sudokuArray[j / 3 * 27 + j % 3 * 3 + k / 3 * 9 + k % 3].banNumber != i + 1) {
                        x++;
                        y = j / 3 * 27 + j % 3 * 3 + k / 3 * 9 + k % 3;

                    } else if (sudokuArray[j / 3 * 27 + j % 3 * 3 + k / 3 * 9 + k % 3].answer == i + 1) {
                        x = 2;
                    }
                }
                if (x == 1) {
                    sudokuArray[y].answer=i+1;
                    temp++;
                }
            }
        }
    }
    console.log(sudokuArray[0].answer);
}


var sudokuDate = {
    answer: "",
    banNumber: ""

}