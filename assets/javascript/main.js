const button1 = document.querySelector('.button-1')
const button2 = document.querySelector('.button-2')
const button3 = document.querySelector('.button-3')
const output = document.querySelector('.output')

let counter = 0

/* Counter Incrementer */
button1.addEventListener("click", function() {

  counter = counter + 1

})


/* Counter Announcer */
button2.addEventListener("click", function() {


  console.log("What is counter now?", counter)
  if (counter % 2 === 0) {
    output.innerHTML += 'Counter is ' + counter + ' which is even!<br>'
    // alert('Even!')
  } else {
    output.innerHTML += 'Counter is ' + counter + ' which is odd!<br>'
    // alert('Odd!')
  }

  // These two lines are identical in effect:
  // output.innerText = output.innerText + ", " + counter
  // output.innerText += ", " + counter

  // If our HTML is <div class="output">Counter <strong>Value</strong></div>
  // 1. output.innerText is "Counter Value" (because that's the TEXT we have inside the output DIV)
  // 2. Concatenate innerText and ", " – getting "Counter Value, "
  // 3. Concatenate the value of Step 2 and the value of counter – getting "Counter Value, 0"
  // 4. Now we have the string "Counter Value, 0" on the right-hand side of the assignment
  // 5. innerText's starting value of "Counter Value" will now be replaced with "Counter Value, 0"
  // 6. Next time, innerText will be replaced with "Counter Value, 0, 1"

})


button3.addEventListener("click", function() {
  console.log("Button 3 has been clicked. We're high-rollin' now!")

  // An IF statement is for making decisions: do I do THIS, or do I do THAT, based on a given condition.
  if ("Cats" === "Cats") { // === (sometimes known as "threequals") is the "strict equality operator." It says, "Are these things not only the same, but THE SAME THING." Don't worry about that distinction for now, or how it is different from "twoquals" (==). For now, just know that it is entirely different from the assignment operator (=). The single-equal sign assignment 
    output.innerText = 'Cats are cats'
  } else {
    output.innerText = 'Something is fundamentally wrong with the Universe (or, I wrote my code wrong).'
  }
})