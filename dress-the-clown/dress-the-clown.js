// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')

//create variable to change the heads everytime the function is called
let headIndex = 0

document.addEventListener('keydown', function (e) {
  switch (e.key) {
    case e.key:
      changeClownHead()
      break
  }
})

//start by being able to change just 1 part of the body by making a function
//give an id to the img tag in html
//grab the image from html by using getElementById
//change the source of the image so the clowns head is different
//google how to add arow keys into javascript
//add arrow keys!

function changeClownHead() {
  console.log(changeClownHead)
  let head = document.getElementById('head')
  head.src = './images/head1.png'
  let headSrc = './images/head' + headIndex + '.png'
}
