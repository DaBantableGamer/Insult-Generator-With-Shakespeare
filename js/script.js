// var secondKey = Object.keys('insult'); //fetched the key at third index

/*
function getWord() {
    fetch('https://insult.mattbas.org/api/insult.json')
        .then(response => response.json())
        .then(data => document.getElementById('data').innerText = secondKey);
}
getWord()

*/

/*
function getNoun(){
    fetch('https://random-words-api.vercel.app/word/noun')
      .then(response => response.json())
      .then(data => document.getElementById('data').innerText = data[0].word );
 }
 getNoun() 
*/

// 'Primitive' types e.g. integer (3), string (Haaris), boolean (true/false)

// Array / Object

// Element <input type="button">

/* Pseudo-code */

/*
Browsers understand version 5 of JavaScript, or 'ES5'.
Nowadays, we use ES8, so for browsers to understand that, we need to translate (like French to English for an English speaker), but in programming we call this 'transpiling'
For now, we're just going to write everything in ES5, but you can start learning ES6/7/8/whatever as well, as we'll get some transpiling going.
*/

// []
// [0 => 'vile']
// [0 => 'vile', 1 => 'horrible']





// 'When we' - Modifying 2. b) to be more 'modern' - we use 'event listeners' in the JavaScript, rather than onclick in the HTML

// 1. Write a function that queries their API for an adjective - getAdjective
async function getAdjective(){
    const response = await fetch('https://insult.mattbas.org/api/adjective.json');
    var data = await response.json();
    console.log(data['insult']);
    //document.getElementById('insult').innerText = data['insult'];
    return data.insult
}

// 2. a) Write a function (getNum) that gets the number that the user has input, and runs the first function (getAdjective) that many times (inefficiency)
async function getNum() {
  var string = ''
  //console.log('anything')
  var number = document.getElementById("numberIn").value
  console.log(number)

  // 3. Create an empty array so we can start putting words in it
  var arrayOfInsults = [];
  let numCheck = Number(document.getElementById('numberIn').value)
  console.log(numCheck)
  // 4. When the user clicks submit, make sure the user has put *something* in
  // 5. When the user clicks submit, make sure the number isn't above 20 or below 1
  if (numCheck <= 0 || numCheck > 20){
    alert('You MUST input a Number Greater Than 0 and Less Than or Equal To 20!')
  }
  else {
    // 2. c) Build up a long string of words that the API has given us, and add a line break between each
    for (let i = 1; i <= number; i++){
      var word = await getAdjective()
      // 3. Ensure that there aren't any duplicates *before* we output it to the page. We may need more API calls to ask for replacements.
      if (arrayOfInsults.includes(word)) {
        // 3. a) If it's a dupe, put the array pointer back one, as we need to try again
        i--;
     }
      else {  
        // 3. b) If it's not a dupe, add it to our array of insults
        arrayOfInsults.push(word);
     }
    //string =  string + '\n' + word //function that fetches the insult
    }
  }
  // 2. d) Convert our non-duplicate array into a string, using \n (new line) as a 'delimiter' to separate the words
document.getElementById('insult').innerText = arrayOfInsults.join('\n');
}

// 2. b) When the Submit button is clicked, run the getNum function
var btn = document.getElementById('enterButton')
console.log(btn)
btn.addEventListener('click', function(e) {
  getNum()
});


// New code that we haven't written yet

// 4. When the user clicks submit, make sure the user has put *something* in -- DONE
// 5. When the user clicks submit, make sure the number isn't above 20 or below 1 -- DONE
var formEdit = document.getElementById('numberIn');
formEdit.addEventListener('input', e => console.log('Form Changed')) //Records if Form has changed in console -- Could be useful?
/*
var numCheck = document.getElementById('numberIn').value
if (numCheck != Number){
  alert('You MUST input a Number!')
}
else {
*/

// Added required arg onto the form html -- maybe a more eff way using javascript



// 6. After the 5th insult, start SHOUTING INSULTS IN CAPITAL LETTERS BECAUSE THE PERSON CLEARLY ISN'T LISTENING
/*
arrayOfInsults = arrayOfInsults.map(function(x){return x.toUpperCase()})
      console.log(arrayOfInsults + i)
*/
    






/*
function getAdjective(){
    fetch('https://insult.mattbas.org/api/adjective.html')
      .then(response => response.text)
      .then(data => document.getElementsByClassName('insult'))
      .then(text => console.log(data))

 }
 getAdjective() 

{
 "error": false, 
 "args": {"lang": "en", "template": "You are as <adjective> as <article target=adj1> <adjective min=1 max=3 id=adj1> <amount> of <adjective min=1 max=3> <animal> <animal_part>"}, 
 "insult": "You are as rotten as a wicked buttload of nasty spiteful diseased cockroach guts"
}


[
  {
    "word": "Emphasis",
    "definition": "",
    "pronunciation": "Emfasis"
  }
]
*/