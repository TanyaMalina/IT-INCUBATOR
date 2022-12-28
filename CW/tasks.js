//8ky
//1
function toCamelCase(str){

    str = str.replace("-", "_")

    let arr = str.split("_")
    arr = arr.map((word, index) => (index > 0) ? word.charAt(0).toUpperCase() + word.slice(1) : word)

    return arr.join("")
    //console.log(arr.join(""))
}

toCamelCase("a-pippi-Is_evil");


//2
function spinWords(string){
    let arrString = string.split(" ")
    arrString = arrString.map((word) => (word.length >= 5) ? word.split("").reverse().join("") : word)

    console.log(arrString.join(" "))
    return arrString.join(" ")
}

spinWords("Hey fellow warriors")


//3
function grow(x){
   return  x.reduce((multiply, num) => multiply *= num)
}

grow([1, 2, 3, 4])


//4
function shortcut (string) {
    const arrVowels = ['a', 'e', 'i', 'o', 'u' ]

    const arrString = string.split('').filter((char) => !arrVowels.includes(char))

    console.log(arrString.join(''))
    return arrString .join('');
}

shortcut('hello')

//5
var humanYearsCatYearsDogYears = function(humanYears) {
    // Your code here!
    const catYears  = 15 + ((humanYears >1)? 9 : 0) + ((humanYears >2) ? (humanYears -2)*4: 0)
    const dogYears =15 + ((humanYears >1)? 9 : 0) + ((humanYears >2) ? (humanYears -2)*5: 0)

    return [humanYears,catYears,dogYears];
}

humanYearsCatYearsDogYears(2)


//6
var summation = function (num) {
    let sum = 0
    for(let i=1; i<=num; i++){
        sum += i
    }

    return sum
}

summation(8)


//7
function removeExclamationMarks(s) {
    const str = s.replaceAll('!', '')

    return str;
}

removeExclamationMarks("Hello World!")


//8
function saleHotdogs(n){
    let sum = 0;
    if (n < 5) return n * 100
    else if (n >= 5 && n < 10) return n * 95
    else return n * 90
}

saleHotdogs(  5)


//9
var min = function(list){
    return Math.min(...list);
}

var max = function(list){
    return Math.max(...list);
}

min([-52, 56, 30, 29, -54, 0, -110])


//10
function invert(array) {
    return array.map(item => -item);
}

invert([1,-2,3,-4,5])// [-1,2,-3,4,-5]