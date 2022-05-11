// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!')

//change images in html
//onclick method with a function to make it work everytime I click on a unicorn

let unicorn = document.getElementsByClassName('inflate-an-image')

for (let i = 0; i < unicorn.length; i++) {
  unicorn[i].onclick = unicornClick
}

let balloonInflate = 0
//make sure that when the unicorn has been clicked, it changes the image
//do this by googling
//maybe create an array for all the images
function unicornClick(e) {
  let unicorn = e.target
  if (unicorn.id == 'unicorn-1') {
    balloonInflate++

    unicorn.src = './images/unicorn-' + balloonInflate + '.png'
    console.log(unicorn)

    if (balloonInflate > 3) {
      balloonInflate = 0
      unicorn.src = './images/unicorn-' + balloonInflate + '.png'
      console.log('thanks')
      alert('My horn is complete, Thank you!')
    }
  }

  if (unicorn.id == 'unicorn-2') {
    balloonInflate++

    unicorn.src = './images/unicorn-' + balloonInflate + '.png'
    console.log(unicorn)

    if (balloonInflate > 3) {
      balloonInflate = 0
      unicorn.src = './images/unicorn-' + balloonInflate + '.png'
      console.log('thanks')
      alert('My horn is complete, Thank you!')
    }
  }

  if (unicorn.id == 'unicorn-3') {
    balloonInflate++

    unicorn.src = './images/unicorn-' + balloonInflate + '.png'
    console.log(unicorn)

    if (balloonInflate > 3) {
      balloonInflate = 0
      unicorn.src = './images/unicorn-' + balloonInflate + '.png'
      console.log('thanks')
      alert('My horn is complete, Thank you!')
    }
  }
  console.log('You clicked on me!')
}
