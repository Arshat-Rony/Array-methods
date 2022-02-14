// sort() 
// giving you your item in an order way .

// but you will get it as an ASCII if needed google it code so you have to pass a  function to get the proper output  
const numbers = [4, 6, 34, 23, 2, 12, 2, 34, 4, 5]

function sorted(array) {
    const sortedArray = array.sort((a, b) => {
        return a - b;

    })
    return sortedArray;
}

const ans2 = sorted(numbers)
// console.log("my sorted array", ans2)



// reverse an array 
// reverse();
function reversed(array) {
    const reversedArray = array.reverse()
    return reversedArray;
}

const ans3 = reversed(ans2)
// console.log(ans3)



// give unlimited input to a fucntion 

function addNumbers(num1, num2) {
    let sum = 0;
    for (let num of arguments) {
        sum += num;
    }
    return sum;
}
const ans4 = addNumbers(12, 3, 456, 7, 78, 8)
// console.log(ans4)



// return a name with huge character 


function addName(firstname, lastname) {
    let fullname = '';
    for (let part of arguments) {
        fullname += part + " ";
    }
    return fullname;
}
const ans5 = addName("abdul", "jalil", "orphe", "najia", "binte", "habib")
console.log(ans5)