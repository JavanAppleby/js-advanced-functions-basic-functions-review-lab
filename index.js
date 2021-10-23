function saturdayFun(thing="roller-skate"){
    return `This Saturday, I want to ${thing}!`;
}
saturdayFun();

let mondayWork = function(nextThing="go to the office") {
    return `This Monday, I will ${nextThing}.`;
}
mondayWork();

function wrapAdjective(string="*") {
    return function (adjective="special") {
        return `You are ${string}${adjective}${string}!`;
    }
}
let emphaticFunction = wrapAdjective("!!!")
emphaticFunction("a dedicated programmer");

let Calculator = {
    add: function(x, y) { 
        return x + y;
    },
    subtract: function(x, y) {
        return x - y;
    },
    multiply: function(x, y) { 
        return x * y;
    },
    divide: function(x, y) {
        return x / y;
    }
}

Calculator.add(1, 3),
Calculator.subtract(1, 3),
Calculator.add(1, 3),
Calculator.subtract(10, 5)

let arrayOfTransforms = [
    function(a){ return a * 2 },
    function(a){ return a + 1000},
    function(a){ return a % 7 }
  ]

let emptyArray = []

function reduceFn(currentValue, currentFn) {
    return currentFn(currentValue);
}

function actionApplyer(a, b) {
    if (b == "") {    
        return a;
    } else {
        return b.reduce(reduceFn, a);

    }
}

console.log(actionApplyer (13, emptyArray))
console.log(actionApplyer (13, arrayOfTransforms))