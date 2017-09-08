$(document).ready(function() {
		clear();
    pressClear();
    display();
    symbols();
    equal();

});

function clear() {
  number = ""
  firstNum = ""
  symbol = ""
  input = ""
  $(".display").text("")
}

function pressClear() {
 $(".clear").on("click", function(){
   clear();
   });
}

function display(){
   $("div").on("click", function(){
      var isInteger = input.indexOf(".") == -1
      var inputIsZero = (input == "") && ($(this).attr("data-value") == 0)
      if($(this).attr("data-value") && input.length < 10 && !inputIsZero){
        if ( isInteger || ( !isInteger && $(this).attr("data-value") != ".")) {
          input += $(this).data("value")
          $(".display").text(input)
          number = parseFloat(input)
        }
      }
  });
}

function cache(symb){
 calculate();
 firstNum = number
 symbol = symb
 input = ""

}

function symbols(){
  $(".symbol").on("click", function(){
    cache($(this).data("symbol"))
    console.log(symbol)
  });
}

function equal() {
  $(".equal").on("click", function(){
    calculate();
  });
};

function calculate() {
    switch (symbol) {
    case "+":
      number =  add(firstNum, number);
       break;
    case "-":
       number = subtract(firstNum, number);
       break;
    case "x":
       number = multiply(firstNum, number);
       break;
    case "/":
       number = divide(firstNum, number);
       break;
    }
    symbol = ""
    $(".display").text(number);
};

var add = function(x,y){
  return x + y
};

var subtract = function(x,y){
  return x - y
};

var multiply = function(x,y){
  return x * y
};

var divide = function(x,y){
  return x / y
};

console.log(subtract("",2))
