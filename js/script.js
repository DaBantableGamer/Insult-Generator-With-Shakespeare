/*
function getWord() {
    fetch('https://insult.mattbas.org/api/insult.json')
        .then(response => response.json())
        .then(data => document.getElementById('data').innerText = obj.['args'].['template']);
}
getWord()
*/

function getWord(){
    fetch('https://random-words-api.vercel.app/word/noun')
      .then(response => response.json())
      .then(data => document.getElementById('data').innerText = data[0].word );
 }
 
 getWord() 