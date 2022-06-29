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


async function getAdjective(){
    const response = await fetch('https://insult.mattbas.org/api/adjective.json');
    var data = await response.json();
    console.log(data['insult']);
    document.getElementById('insult').innerText = data['insult']
}
 getAdjective() 



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