// split("take the value and split your item")
const mycake = "my cake is too long"

function splittedCake(string) {
    const refresCake = string.split("l")
    return refresCake;
}
const ans = splittedCake(mycake)
// console.log(ans)


// slice(start, end) as same as substring(strat,end)
// but not goes to the end number.
function slicedCake(string) {
    const freshCake = string.slice(2, 7)
    return freshCake;

}
const ans2 = slicedCake(mycake)
// console.log(ans2)

// substr(start ,how many character required)

function subCake(string) {
    const yourCake = string.substr(3, 5)
    return yourCake;

}
const ans3 = subCake(mycake)
// console.log(ans3)

// join("take only value that will add your item to join anything")
const words = ["r", "o", 'n', 'y']

function joined(array) {
    const joinedItem = array.join('')
    return joinedItem;
}
const ans4 = joined(words)
// console.log(ans4)

//check the array whether it is array or not? 

function check(array) {
    return Array.isArray(array)
}
const ans5 = check(words)
// console.log(ans5)


// Diffference between slice ( ) and splice( ) method ;

// Slice does not change the original array but splice change the original array.

// join array like the string 

const num1 = [1, 3, 4, 5, 0, 6, ]
const num2 = [0, 6, 5, 4]

function arrayjoins(array1, array2) {
    const joined = array1.concat(array2);
    return joined;
}
const ans6 = arrayjoins(num1, num2)
// console.log(ans6)


// splice ( start,end,insertitem)

function spliced(array) {
    const splicedItem = array.splice(1, 2, "inserted Item")
    return splicedItem;
}
const ans7 = spliced(num1)
console.log("my spliced array",
    ans7)
// my original array 
console.log(num1)