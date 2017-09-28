function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
    let arr = [];
    for (let i = startIndex; i < stopIndex; i++){
       arr.push(i);
    }
    console.log(arr);
    
    for (let i = 0; i<arr.length; i++){
        if (arr[i]%3 ==0 && arr[i]%5 ==0){
            console.log(threeCallback + "," + fiveCallback);
        }
        if (arr[i]%3 ==0){
            console.log(threeCallback);
        }
        if (arr[i]%5 ==0){
            console.log(fiveCallback);
        }
    }
}
threeFive(10, 15, "sayThree", "sayFive");


//3 - for loop

function repeatStringNumTimes(str, num) {
    let string = "";
    for (let i = 0; i<num; i++){
    string+=str
}
    return string;
}

console.log(repeatStringNumTimes("abc ", 3));

//4 - while Loop

function repeatStringNumTimes(str, num) {
    let string = "";
    let i = 0;
    while(i<num){
        i++;
        string+=str
    }
    return string;
}

console.log(repeatStringNumTimes("abc ", 3));

//5 - do Loop

function repeatStringNumTimes(str, num) {
    let string = "";
    let i = 0;
    do {
        i++;
        string+=str
    }
    while (i<num)
    return string;
}

console.log(repeatStringNumTimes("abc ", 3));

//6 - 

var Car = function() {
  this.wheels = 4;
  this.engines = 1;
  this.seats = 5;
};

// Only change code below this line.

var MotorBike = function() {
 this.wheels = 3;
  this.engines = 34;
  this.seats = 43;
};

//7

function multiplyAll(arr) {
  var product = 1;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++){
      product *= arr[i][j];
    }
  }
  return product;
}

// Modify values below to test your code
multiplyAll([[1,2],[3,4],[5,6,7]]);

