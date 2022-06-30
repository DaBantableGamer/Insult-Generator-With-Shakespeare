/*
function getWord() {
    fetch('https://insult.mattbas.org/api/insult.json')
        .then(response => response.json())
        .then(data => document.getElementById('data').innerText = obj.['args'].['template']);
}
getWord()
*/

var insultOne = ["artless", "bawdy", "beslubbering", "stupid", "bootless", "churlish", "churl", "cockered", "clouted", "craven", "currish", "dankish", "dissemb", "droning ", "errant", "fawning", "fobbing", "froward", "frothy",  "gleeking", "goatish", "gorbelli", "impertin", "infectio", "jarring", "loggerhe", "lumpish", "mammering", "mangled", "mewling", "paunchy", "pribbling", "puking", "puny", "qualling", "rank", "reeky", "roguish", "ruttish", "spleeny", "spongy", "surly", "tottering", "unmuzzle", "vain", "venomed", "villainous", "warped", "wayward", "weedy", "yeasty", "wagtail" ];


function getWord() {
    fetch('https://raw.githubusercontent.com/CrispyMerchant/insult-generator/master/content/insults.js')
        .then(response => response.text())
        .then(data => document.getElementById('insult').innerHTML=insultOne[Math.floor(Math.random()*(insultOne.length))]);
}
getWord()

