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
 
var insultOne = ["artless", "bawdy", "beslubbering", "stupid", "bootless", "churlish", "churl", "cockered", "clouted", "craven", "currish", "dankish", "dissemb", "droning ", "errant", "fawning", "fobbing", "froward", "frothy",  "gleeking", "goatish", "gorbelli", "impertin", "infectio", "jarring", "loggerhe", "lumpish", "mammering", "mangled", "mewling", "paunchy", "pribbling", "puking", "puny", "qualling", "rank", "reeky", "roguish", "ruttish", "spleeny", "spongy", "surly", "tottering", "unmuzzle", "vain", "venomed", "villainous", "warped", "wayward", "weedy", "yeasty", "wagtail", "base-court", "bat-fowling", "beef-witted", "beetle-headed", "boil-brained", "clapper-clawed", "clay-brained", "common-kissing", "crook-pated", "dismal-dreaming", "dizzy-eyed", "doghearted", "dread-bolted", "earth-vexing", "elf-skinned", "fat-kidneyed", "fen-sucked", "flap-mouthed", "fly-bitten", "folly-fallen", "fool-born", "full-gorged", "guts-griping", "half-faced", "hasty-witted", "hedge-born", "hell-hated", "idle-headed", "ill-breeding", "ill-nurtured", "knotty-pated", "milk-livered", "motley-minded", "onion-eyed", "plume-plucked", "pottle-deep", "pox-marked", "reeling-ripe", "rough-hewn", "rude-growing", "rump-fed", "shard-borne", "sheep-biting", "spur-galled", "swag-bellied", "tardy-gaited", "tickle-brained", "toad-spotted", "unchin-snouted", "weather-bitten", "apple-john", "baggage", "dingus", "barnacle", "tickle-butt", "jerk", "bladder", "boar-pig", "bugbear", "bum-bailey", "canker-blossom", "clack-dish", "clotpole", "coxcomb", "codpiece", "death-token", "dewberry", "flap-dragon", "flax-wench", "flirt-gill", "foot-licker", "fustilarian", "giglet", "gudgeon", "haggard", "harpy", "hedge-pig", "horn-beast", "hugger-mugger", "joithead", "lewdster", "lout", "maggot-pie", "malt-worm", "mammet", "measle", "minnow", "miscreant", "moldwarp", "mumble-news", "nut-hook", "pigeon-egg", "pignut", "puttock", "pumpion", "ratsbane", "scut", "skainsmate", "strumpet", "varlot", "vassal", "whey-face", "wagtail" ];


function getAdjective(){
var insultsOne = Math.floor(Math.random()*(insultOne.length));
// var insultsTwo = Math.floor(Math.random()*(insultTwo.length));
// var insultsThree = Math.floor(Math.random()*(insultThree.length));
//document.getElementById("insult-display").innerHTML=
data = insultOne[insultsOne]
return data
}

// 2. a) Write a function (getNum) that gets the number that the user has input, and runs the first function (getAdjective) that many times (inefficiency)
function getNum() {
  var string = ''
  //console.log('anything')
  var number = document.getElementById("numberIn").value
  // console.log(number)

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
      var word = getAdjective()
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
  arrayOfInsultsUpper = arrayOfInsults.map(function(x){return x.toUpperCase()}) // creates variable of an uppercase version of the insult array
  var len = arrayOfInsults.length;
  // console.log(arrayOfInsultsUpper + i)
  if (len <= 5) {
    document.getElementById('insult-display').innerText = arrayOfInsults.join('\n');
    }
  else {      // 6. After the 5th insult, start SHOUTING INSULTS IN CAPITAL LETTERS BECAUSE THE PERSON CLEARLY ISN'T LISTENING -- DONE
    const slicedArray = arrayOfInsults.slice(0, 5); // stores first 5 values in a new array
    const splicedArray = arrayOfInsultsUpper.splice(0, 5);  //Stores everything except first 5 values in a new array
    document.getElementById('insult-display').innerText = slicedArray.join('\n') + '\n' + arrayOfInsultsUpper.join('\n') + '\n'
    // Combines both arrays plus writes them
  }
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
formEdit.addEventListener('input', e => console.log('Form Changed')) //Records if Form has changed in console -- Could be useful?
/*
var numCheck = document.getElementById('numberIn').value
if (numCheck != Number){
  alert('You MUST input a Number!')
}
else {
*/

// Added required arg onto the form html -- maybe a more eff way using javascript



// 6. After the 5th insult, start SHOUTING INSULTS IN CAPITAL LETTERS BECAUSE THE PERSON CLEARLY ISN'T LISTENING -- DONE
/*
arrayOfInsultsUpper = arrayOfInsults.map(function(x){return x.toUpperCase()})
      console.log(arrayOfInsultsUpper + i)
*/





// import {randomGen()} from 'https://raw.githubusercontent.com/CrispyMerchant/insult-generator/master/content/insults.js'
// console.log(randomGen())
// console.log(insultOne)
//async function getAdjective(){
  

  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Key': 'd00f09e4b2mshf66cd476511c108p113d9ejsna4f181cf6dc4',
  //     'X-RapidAPI-Host': 'shakespeare1.p.rapidapi.com'
  //   }
  // };
    // console.log('******')
    // // const response = await fetch('https://raw.githubusercontent.com/CrispyMerchant/insult-generator/master/content/insults.js');
    // var data = await response.text();
    // console.log(data);
    // document.getElementById('insult').innerText = data['insult'];
    // return data.insult
    //import {insultOne} from 'https://raw.githubusercontent.com/CrispyMerchant/insult-generator/master/content/insults.js'
    //console.log(randomGen())
//       fetchInject([
//         'https://raw.githubusercontent.com/CrispyMerchant/insult-generator/master/content/insults.js'
//     ]).then(() => {
        
//         function addScript(script) {
//           var jsElement = document.createElement("script");
//           jsElement.type = "application/javascript";
//           jsElement.src = script;
//           document.body.appendChild(jsElement);
//       }
//       function addScript('https://raw.githubusercontent.com/CrispyMerchant/insult-generator/master/content/insults.js');
//       console.log(`insult one: ${insultOne}`)
//       })
 //}


// 2. a) Write a function (getNum) that gets the number that the user has input, and runs the first function (getAdjective) that many times (inefficiency)
// async function getNum() {
//   var string = ''
//   //console.log('anything')
//   var number = document.getElementById("numberIn").value
//   // console.log(number)

//   // 3. Create an empty array so we can start putting words in it
//   var arrayOfInsults = [];
//   let numCheck = Number(document.getElementById('numberIn').value)
//   console.log(numCheck)
//   // 4. When the user clicks submit, make sure the user has put *something* in
//   // 5. When the user clicks submit, make sure the number isn't above 20 or below 1
//   if (numCheck <= 0 || numCheck > 20){
//     alert('You MUST input a Number Greater Than 0 and Less Than or Equal To 20!')
//   }
//   else {
//     // 2. c) Build up a long string of words that the API has given us, and add a line break between each
//     console.log('HEREWRSDLKJFGHSDFG', number)
//     for (let i = 1; i <= number; i++){
//       var word = await getAdjective()
//       // 3. Ensure that there aren't any duplicates *before* we output it to the page. We may need more API calls to ask for replacements.
//       if (arrayOfInsults.includes(word)) {
//         // 3. a) If it's a dupe, put the array pointer back one, as we need to try again
//         // i--;
//      }
//       else {  
//         // 3. b) If it's not a dupe, add it to our array of insults
//         arrayOfInsults.push(word);
//      }
//     //string =  string + '\n' + word //function that fetches the insult
//     }
//   } 
//   // 2. d) Convert our non-duplicate array into a string, using \n (new line) as a 'delimiter' to separate the words
// // document.getElementById('insult-display').innerText = arrayOfInsults.join('\n');
// }

// // 2. b) When the Submit button is clicked, run the getNum function
// var btn = document.getElementById('enterButton')
// console.log(btn)
// btn.addEventListener('click', function(e) {
//   getNum()
// });


// // New code that we haven't written yet

// // 4. When the user clicks submit, make sure the user has put *something* in -- DONE
// // 5. When the user clicks submit, make sure the number isn't above 20 or below 1 -- DONE + Throws up an Alert
// var formEdit = document.getElementById('numberIn');
// formEdit.addEventListener('input', e => console.log('Form Changed')