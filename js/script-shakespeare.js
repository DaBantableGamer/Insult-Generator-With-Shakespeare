/*
function getWord() {
    fetch('https://insult.mattbas.org/api/insult.json')
        .then(response => response.json())
        .then(data => document.getElementById('data').innerText = obj.['args'].['template']);
}
getWord()
*/
/*
var insultOne = ["artless", "bawdy", "beslubbering", "stupid", "bootless", "churlish", "churl", "cockered", "clouted", "craven", "currish", "dankish", "dissemb", "droning ", "errant", "fawning", "fobbing", "froward", "frothy",  "gleeking", "goatish", "gorbelli", "impertin", "infectio", "jarring", "loggerhe", "lumpish", "mammering", "mangled", "mewling", "paunchy", "pribbling", "puking", "puny", "qualling", "rank", "reeky", "roguish", "ruttish", "spleeny", "spongy", "surly", "tottering", "unmuzzle", "vain", "venomed", "villainous", "warped", "wayward", "weedy", "yeasty", "wagtail" ];


function getWord() {
    fetch('https://raw.githubusercontent.com/CrispyMerchant/insult-generator/master/content/insults.js')
        .then(response => response.text())
        .then(data => document.getElementById('insult').innerHTML=insultOne[Math.floor(Math.random()*(insultOne.length))]);
}
getWord()
*/
 
async function getAdjective(){
    console.log('******')
//     const response = await fetch('https://raw.githubusercontent.com/CrispyMerchant/insult-generator/master/content/insults.js');
//     var data = await response.text();
//     console.log(data);
//     document.getElementById('insult').innerText = data['insult'];
//     return data.insult
//       fetchInject([
//         'https://raw.githubusercontent.com/CrispyMerchant/insult-generator/master/content/insults.js'
//     ]).then(() => {
        console.log(`insult one: ${insultOne}`)
//       })
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
    console.log('HEREWRSDLKJFGHSDFG', number)
    for (let i = 1; i <= number; i++){
      var word = await getAdjective()
      // 3. Ensure that there aren't any duplicates *before* we output it to the page. We may need more API calls to ask for replacements.
      if (arrayOfInsults.includes(word)) {
        // 3. a) If it's a dupe, put the array pointer back one, as we need to try again
        // i--;
     }
      else {  
        // 3. b) If it's not a dupe, add it to our array of insults
        arrayOfInsults.push(word);
     }
    //string =  string + '\n' + word //function that fetches the insult
    }
  } 
  // 2. d) Convert our non-duplicate array into a string, using \n (new line) as a 'delimiter' to separate the words
// document.getElementById('insult').innerText = arrayOfInsults.join('\n');
}

// 2. b) When the Submit button is clicked, run the getNum function
var btn = document.getElementById('enterButton')
console.log(btn)
btn.addEventListener('click', function(e) {
  getNum()
});


// New code that we haven't written yet

// 4. When the user clicks submit, make sure the user has put *something* in -- DONE
// 5. When the user clicks submit, make sure the number isn't above 20 or below 1 -- DONE + Throws up an Alert
var formEdit = document.getElementById('numberIn');
formEdit.addEventListener('input', e => console.log('Form Changed'))