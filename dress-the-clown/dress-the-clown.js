// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')

//this document line is made to be able to notice when a key is being pressed
//this happens regardless of whether they hold a value or not
document.onkeydown = checkKey

//this function is created to make certain things happen when certain keys are hit
//this first line in the function is showing that us that firstly, a function is being created,
// secondly that the function is called checkKey. Thirdly we can see that it has been given a parameter of e
//the e is an event listener and it represents an element that has been effected. In this case it is the keys-
//that will be pressed
function checkKey(e) {
  //this line of code is an if statement.
  //the number 38 is the code number for the up arrow which gives the event listener a value!
  //this whole if statement is basically saying that if the up arrow key is pressed, then the change vertical-
  //function will be applied to it (this function will be explained further down.)
  if (e.keyCode == '38') {
    changeVertical(-1)

    //this is an else if statement. it is basically saying if the statement above doesnt apply, then this one will!
    //the else if statement is doing the exact same as the above if statement, except that is has a different number.
    //the 40 is for the down arrow key
    //with these two if and else if statements, we are able to change between the clowns head, body and shoes.
  } else if (e.keyCode == '40') {
    changeVertical(1)

    //again, this statement is pretty similar, except that it has a different number and that a different function is being applied
    //37 is the number for the left arrow key and instead of changeVertical, it is changeHorizontal
  } else if (e.keyCode == '37') {
    changeHorizontal(-1)

    //both this line of code and the one above, means that now when the left and right arrow keys are pressed, the clown will change
    //clothes (provided you add the code down below aswell)
    //number 39 is for the right arrow key
  } else if (e.keyCode == '39') {
    changeHorizontal(1)
  }
}
//here we are creating a variable for all the indexes (head, body and shoes),
//and we are starting them all off with the value of 0 so that it starts from the first images of clothing.
//the variable was created while refactoring so that we could keep the lines of code as small as possible.
//the container in which the numbers are being stored in is called an array.
let indexes = [0, 0, 0]

//here we are creating another variable called mainIndex.
//this one has also been given  a value of 0
let mainIndex = 0

//here we are yet again creating variables.
//the variables being created are called head, body and shoes.
//in the html file there have been ids assigned to the images called 'head' 'body' shoes'.
//this document.getelelmentbyid is allowing the js to grab those images from the html file.
let head = document.getElementById('head')
let body = document.getElementById('body')
let shoes = document.getElementById('shoes')

//this imgs variable is given an array of the variables that were just created above, meaning that the imgs
//variable now contains all 3 images (head, body, shoes)
let imgs = [head, body, shoes]

//this variable called strings is made to store an array of strings ('head', 'body', 'shoes')
let strings = ['head', 'body', 'shoes']

//here is the changeHorizontal function that was mentioned earlier
//this function has been given a parameter of shift.
function changeHorizontal(shift) {
  //index variable with the value of indexes that holds mainIndex
  let index = indexes[mainIndex]

  //image variable made that has the value of the imgs variables that holds
  //mainIndex
  let image = imgs[mainIndex]

  //here is the last variable called str that has the value of strings
  //these three variables were made during refactoring to tidy up and limit the
  //amount of code.
  let str = strings[mainIndex]

  //this line of code is using the addition assignment (+=), this is basically meaning that
  //the shift value will have the same value as the index.
  index += shift

  //here we have another if statement, but rather than if else, these just stay as if statements
  //this first line is telling us that if the index is less than 0, the index should be five
  //the reason for five is that that is the amount of images there are of each part of the clown(head, body, shoes)
  if (index < 0) index = 5

  //this line is saying that if the index is greater than 5 it should equal 0.
  //these link up with the above code so that it works to scroll through with the arrow keys and
  //not be able to scroll any further than the amount of images (5)
  if (index > 5) index = 0

  //here the index variable is being assigned the values of indexes with mainIndex so that all the code actually
  //has a value
  indexes[mainIndex] = index

  //this line here is how all the different images are selected when an arrow key is hit.
  //the image source equals the images folder, plus the str variable(so we know what part of the body) plus
  //the index so that the js can link with the html and then plus png at the end of the image.
  image.src = './images/' + str + index + '.png'
}

//here we have the changeVertical function that was also mentioned earlier.
//Rather than actuallly being able to change the outfits on the clown, this one allows you to click through what
//part of the clown you want to dress. This function also takes a shift parameter.
function changeVertical(shift) {
  //this is the same as I explained above, except instead of index it is mainIndex
  mainIndex += shift

  //here these two if statements are only 2. that is because there are only 3 sections on the clown
  //(head 0, body 1, shoes 2). it is doing the same thing in the changeHorizontal function, which is making
  //sure that you a not able to click through any more than the parts that are declared.
  if (mainIndex < 0) mainIndex = 2
  if (mainIndex > 2) mainIndex = 0
}
