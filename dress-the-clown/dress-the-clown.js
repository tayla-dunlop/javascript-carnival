// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')

//start by being able to change just 1 part of the body by making a function
//give an id to the img tag in html
//grab the image from html by using getElementById
//change the source of the image so the clowns head is different
//google how to add arow keys into javascript
//add arrow keys!

document.onkeydown = checkKey

function checkKey(e) {
  if (e.keyCode == '38') {
    changeVertical(-1)
  } else if (e.keyCode == '40') {
    changeVertical(1)
  } else if (e.keyCode == '37') {
    changeHorizontal(-1)
  } else if (e.keyCode == '39') {
    changeHorizontal(1)
  }
}
//create variable to change the heads everytime the function is called

let indexes = [0, 0, 0]
let mainIndex = 0

let head = document.getElementById('head')
let body = document.getElementById('body')
let shoes = document.getElementById('shoes')

let imgs = [head, body, shoes]
let strings = ['head', 'body', 'shoes']

function changeHorizontal(shift) {
  let index = indexes[mainIndex]
  let image = imgs[mainIndex]
  let str = strings[mainIndex]

  index += shift

  if (index < 0) index = 5
  if (index > 5) index = 0

  indexes[mainIndex] = index

  image.src = './images/' + str + index + '.png'
}

function changeVertical(shift) {
  mainIndex += shift

  if (mainIndex < 0) mainIndex = 2
  if (mainIndex > 2) mainIndex = 0
}
