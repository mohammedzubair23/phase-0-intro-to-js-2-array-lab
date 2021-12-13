const cats = ["Milo", "Otis", "Garfield"]; 
  
function destructivelyAppendCat() {
    cats.push("Ralph")
    
}
function destructivelyPrependCat() {
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat() {
    cats.pop()
}
function destructivelyRemoveFirstCat() {
    cats.shift()
}
function appendCat(){
    var newArray = cats.slice();
    // or ES6 way
    // var newArray = [...cats];
    newArray.push("Broom")
    return newArray
     }
function prependCat() {
    var newArray = cats.slice();
    // or ES6 way
    // var newArray = [...cats];
    newArray.unshift("Arnold")
    return newArray
}
function removeLastCat() {
    var newArray = cats.slice();
    // or ES6 way
    // var newArray = [...cats];
    newArray.pop()
    return newArray
}
function removeFirstCat() {
    var newArray = cats.slice();
    // or ES6 way
    // var newArray = [...cats];
    newArray.shift()
    return newArray
}




