var my_max = function(arr){
  var max = 0
  for(i = 0; i < arr.length; i++) {
    if (arr[i] > max){
      max = arr[i]
    }
  }
  return max
};

console.log(my_max([10,60,42,5]));


var vowel_count = function(str) {
  var count = 0
  var vowels = "AEIOUaeiouYy"
  for(i = 0; i < str.length; i++) {
       for(j = 0; j < vowels.length; j++) {
        if (str[i] === vowels[j])  {
         count += 1
        }
        }
  }
  return count
};

console.log(vowel_count("happy christmas"))

var reverse = function(str){
  var result = ""
  for (i = str.length-1; i >= 0; i--){
    result += str[i]
  }
  return result
}

console.log(reverse("string"))
 
