const app = "I don't do much."
var kittens = ['Milo','Otis','Garfield'];

function destructivelyAppendKitten(name){
  kittens.push('Ralph')
}
function destructivelyPrependKitten(name){
  kittens.unshift('Bob')
}
function destructivelyRemoveLastKitten(){
  kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}

function appendKitten(name){
  var newArray = kittens
  newArray[kittens.length] = name
  return newArray
}
function prependKitten(name){
    var newArray = kittens.slice()
    newArray.unshift(name)
    return newArray
}
