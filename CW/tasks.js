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