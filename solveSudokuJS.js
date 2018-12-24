/**
 * 
 */
function solve() {
    var test = [];
    for (var i = 0; i < 81; i++) {
        test.push(sudokuDate);
        test[i].answer = document.getElementsByName("n" + i).values;
    }
    console.log(test.length);
}

var sudokuDate = {
    answer: "",
    banNumber: ""

}