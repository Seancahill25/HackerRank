Declare  variables: one of type int, one of type double, and one of type String.
Read  lines of input from stdin (according to the sequence given in the Input Format section below) and initialize your  variables.
Use the  operator to perform the following operations: 
Print the sum of  plus your int variable on a new line.
Print the sum of  plus your double variable to a scale of one decimal place on a new line.
Concatenate  with the string you read as input and print the result on a new line.



code given to me lines 11-35
// process.stdin.resume();
// process.stdin.setEncoding('ascii');

// var input_stdin = "";
// var input_stdin_array = "";
// var input_currentline = 0;

// process.stdin.on('data', function (data) {
//     input_stdin += data;
// });

// process.stdin.on('end', function () {
//     input_stdin_array = input_stdin.split("\n");
//     main();    
// });

// // Reads complete line from STDIN
// function readLine() {
//     return input_stdin_array[input_currentline++];
// }

// function main() {
//     var i = 4
//     var d = 4.0
//     var s = "HackerRank "
    
    my code lines 39-51
    
    var i2 = 0;
    var d2 = 0;
    var s2 = " ";

    i2 = parseInt(readLine());
    d2 = parseFloat(readLine());
    s2 = readLine();

    console.log(i + parseInt(i2));

    console.log(parseFloat(d + d2).toFixed(1));
    console.log(s + s2)
}
