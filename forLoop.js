var anjana = 22;
var naveen = 30;
var amit = 09;
var preeti = 50;

// count student who got more than 10 marks

var prizeMarks = 10;

var count = 0
if(anjana > prizeMarks) {
    count = count + 1;
}
if(naveen > prizeMarks) {
    // count = count + 1;
    count++;
}
if(amit > prizeMarks) {
    count = count + 1;
}
if(preeti > prizeMarks) {
    count++;
}

console.log("Total students who got more than 10 marks: ", count);


var studnetsMarksArr = [22, 30, 09, 50, 0, 20, 40, 44];


// for( i = 0; i < 3; i++){
//     console.log(i);
// }

count = 0;
for(var studentMark = 0; studentMark < studnetsMarksArr.length; studentMark++) {
    if(studnetsMarksArr[studentMark] > prizeMarks) {
        count++;
    }
}

console.log("(From For Loop ) Total students who got more than 10 marks: ", count);
