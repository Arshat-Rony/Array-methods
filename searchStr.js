const anthem = "Amar sonar bangla ami tomay valobasi"



// search strig with a  value 
const userinput = "blacKmail"
const savedUsername = "blackMail"
if (userinput.toLowerCase() == savedUsername.toLowerCase()) {
    // console.log(savedUsername)
}


const products = [
    "Dell laptop",
    "Hp laptop",
    "macbook laptop",
    "shaomi mobile",
    "samsung phone",
    "tecno mobile",
    "laptop dell"
]
let searchItem = "dell"

function search(array) {
    let yourItems = []
    for (let item of array) {
        if (item.toLowerCase().includes(searchItem.toLowerCase())) {
            yourItems.push(item)
        }
    }
    return yourItems;
}
const ans = search(products)
// console.log(ans)

// another way of checking the value that will show only the item startsWith your searching value;

function searchIt(array) {
    let yourItems = []
    for (let item of array) {
        if (item.toLowerCase().startsWith(searchItem.toLowerCase())) {
            yourItems.push(item)
        }
    }
    return yourItems;
}
const ans2 = searchIt(products)
console.log(ans2)