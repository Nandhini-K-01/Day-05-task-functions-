var arr = [1,2,3,4,5,6,7,8,9];

//To print odd no's in array using anonymous function
var odd = function(a){
    return a.filter((ele)=>ele%2 != 0);
    } 
console.log(odd(arr));


//To print odd no's in array using IIFE function
(function (a){
    console.log(a.filter((ele)=>ele%2 != 0));
    })
(arr);


//To print odd no's in array using arrow function
var odd = (a) => {
    return a.filter((ele)=>ele%2 != 0);
    }
console.log(odd(arr));


//To sum all no's in array using anonymous function
var sum = function(a){
    return a.reduce((acc,ele)=>acc + ele);
}
console.log(sum(arr));


//To sum all no's in array using IIFE function
(function(a){
    console.log(a.reduce((acc,ele)=>acc + ele));
})
(arr);


//To sum all no's in array using arrow function
var sum = function(a){
    return a.reduce((acc,ele)=>acc+ele);
}
console.log(sum(arr));


//To rotate an array by k times using anonymous function
var rotate = function (a,k){
    for (var i=0; i<=k; i++){
    a.unshift(a.pop())
}
    return a
}
console.log(rotate(arr,4));


//To rotate an array by k times using IIFE function
(function (a,k){
    for (var i=0; i<k; i++){
    a.unshift(a.pop())
}
    console.log(a);
})
(arr,4);


//To remove duplicates from an array using anonymous function
var duplicate = function(arr){
    var new_arr = [];
    for(var i of arr){
        if (new_arr.indexOf(i) === -1){
            new_arr.push(i)
        }
    }
    return new_arr;
}
console.log(duplicate([1,2,3,2,3]));


//To remove duplicates from an array using IIFE function
(function(arr){
    var new_arr = [];
    for(var i of arr){
        if (new_arr.indexOf(i) === -1){
            new_arr.push(i)
        }
    }
    console.log(new_arr);
});
duplicate([1,2,3,2,3]);


//To return all prime numbers in array using anonymous function
var arr1 = [];
var checkPrime = function(arr){
    if(arr <=1 ){
        return false;
    }
    for (var i=2; i<arr; i++){
        if (arr%i === 0){
            return false;
            }
        }
    return true
    }
arr.forEach((ele) => {
    var isPrime = checkPrime(ele);
    if (isPrime){
        arr1.push(ele);
}});
console.log(arr1);


//To return all prime numbers in array using IIFE function
var arr1 = [];
(function(arr){
    if(arr <=1 ){
        return false;
    }
    for (var i=2; i<arr; i++){
        if (arr%i === 0){
            return false;
            }
        }
    return true
    })
arr.forEach((ele) => {
    var isPrime = checkPrime(ele);
    if (isPrime){
        arr1.push(ele);
}});
console.log(arr1);


//To return all prime numbers in array using arrow function
var arr1 = [];
var checkPrime = (arr)=> {
    if(arr <=1 ){
        return false;
    }
    for (var i=2; i<arr; i++){
        if (arr%i === 0){
            return false;
            }
        }
    return true
    };
arr.forEach((ele) => {
    var isPrime = checkPrime(ele);
    if (isPrime){
        arr1.push(ele);
}});
console.log(arr1);


//To return all palindromes in array using anonymous function
var arr2 = ["level","java",1234,32323];
var arr3 = [];
var palindrome = function(ele) {
    var a = ele.split("").reverse().join("");
    if (a === ele){
        return true
    }
   return false
}
arr2.forEach((ele)=>{
    var str = String(ele)
    var isPalindrome = palindrome(str);
    if (isPalindrome){
        arr3.push(ele)
    }
})
console.log(arr3)


//To return all palindromes in array using IIFE function
var arr2 = ["level","java",1234,32323];
var arr3 = [];
(function(ele) {
    var a = ele.split("").reverse().join("");
    if (a === ele){
        return true
    }
   return false
})
arr2.forEach((ele)=>{
    var str = String(ele)
    var isPalindrome = palindrome(str);
    if (isPalindrome){
        arr3.push(ele)
    }
})
console.log(arr3)

//To return all palindromes in array using arrow function
var arr2 = ["level","java",1234,32323];
var arr3 = [];
var palindrome = (ele) => {
    var a = ele.split("").reverse().join("");
    if (a === ele){
        return true
    }
   return false
}
arr2.forEach((ele)=>{
    var str = String(ele)
    var isPalindrome = palindrome(str);
    if (isPalindrome){
        arr3.push(ele)
    }
})
console.log(arr3)

//To return median of two sorted arrays of same size using anonymous function
var num1 = [5,3,1,4];
var num2 = [9,6,7,8];
var newnum1 = num1.sort();
var newnum2 = num2.sort();
var num = newnum1.concat(newnum2);
var median = function (num){
    var len = num.length;
    if (len%2 !== 0){
        var a = Math.ceil(len/2);
        return a/2;
    }
    else{
        var a = len/2;
        var b = num[a] + num[a-1];
        return b/2;
    }
}
console.log(median(num));


//To return median of two sorted arrays of same size using IIFE function
var num1 = [5,3,1,4];
var num2 = [9,6,7,8];
var newnum1 = num1.sort();
var newnum2 = num2.sort();
var num = newnum1.concat(newnum2);
(function (num){
    var len = num.length;
    if (len%2 !== 0){
        var a = Math.ceil(len/2);
        console.log(a/2);
    }
    else{
        var a = len/2;
        var b = num[a] + num[a-1];
        console.log(b/2);
    }
});
(num);


//To convert all the strings to title cap in string array using anonymous function
var getTitleCase = function (str) {
    return str
      .split(' ')
      .map(word => {
        return word.charAt(0).toUpperCase() +
               word.slice(1).toLowerCase();
      })
      .join(' ');
  }
console.log(getTitleCase('one, two, three'));


//To convert all the strings to title cap in string array using IIFE function
(function (str) {
    console.log(str
      .split(' ')
      .map(word => {
               word.charAt(0).toUpperCase() +
               word.slice(1).toLowerCase();
      })
      .join(' '));
  })
('one, two, three');


//To convert all the strings to title cap in string array using arrow function
var getTitleCase = (str) => {
    return str
      .split(' ')
      .map(word => {
        return word.charAt(0).toUpperCase() +
               word.slice(1).toLowerCase();
      })
      .join(' ');
  }
console.log(getTitleCase('one, two, three'));
