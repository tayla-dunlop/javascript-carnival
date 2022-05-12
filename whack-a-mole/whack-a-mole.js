// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

//create a variable to store elements in cells

let cells = document.getElementsByTagName('td')
let moleImage = document.createElement('img')
moleImage.classList.add('mole')
moleImage.src = 'mole.PNG'
moleImage.onclick = whackedMole
//create a loop for it to go through

//make a function that lets the mole pop up in any random cell
//use math.random to make it random
//source the mole image so a mole actually pops up
function cellsClick() {
  let randomIndex = Math.floor(Math.random() * 24)
  randomCells = cells[randomIndex]

  randomCells.appendChild(moleImage)
}

//call the function
cellsClick()

//make another function to make the mole disappear when clicked
//fix bug of multiple moles in a single cell
//fix other bug that allows you to click anywhere
function whackedMole() {
  console.log('Catch me if you can!')
  cellsClick()
  new Audio('whack-audio.wav').play()
}

//add sound effects!
