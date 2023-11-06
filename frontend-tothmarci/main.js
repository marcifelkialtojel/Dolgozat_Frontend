import list from "./quotes.json"
import "./style.css"

const quotes = Array.from(list.quotes)
function init(){
  document.getElementById('osszes').addEventListener('click', sortbyOsszes)
  document.getElementById('the').addEventListener('click', sortbyThe)
  document.getElementById('hossz').addEventListener('click', hosszQuotes)
  document.getElementById('darabszam').addEventListener('click', szerzoKereses)
  console.log(quotes)
}

function sortbyOsszes(){
   const osszesQuote = quotes.filter((quotes) => {
   return quotes.author + quotes.quotes;
  }).sort((a, b) => {
  if (a.author < b.author){
    return -1;
  }
  if (a.author > b.author){
    return 1;
  }
  else{
    return 0;
  }
});
const listington = document.getElementById('lista');
let ul = `<ul>${quotes.map(quotes =>
  `<li>${quotes.author} <br> ${quotes.quote}</li> <br>`).join('')} </ul>`; 

  listington.innerHTML = ul;
console.log(osszesQuote);
}

function sortbyThe(){
  const theQuotes = quotes.map((quotes) => {
    return quotes.quote;

  })

  theQuotes.forEach((item) => {
    if(item.includes('the ')){
      item.replace('the ', '<strong> the </strong> ');
    }
    else if(item.includes('The ')){
     item.replace('The ', '<strong> The </strong> ');
    }
    else{
      return item;
    }
  })

  let list = document.getElementById('lista2')
  let ol = `<ol>${quotes.map(quotes =>
    `<li>${quotes.quote}</li> <br>`).join('')} </ol>`; 
  
    list.innerHTML = ol;
    
console.log(theQuotes)
}

function hosszQuotes(){
  const hosszuLista = quotes.map((quote) => quote.quote.length).join(', ');
  document.getElementById("bekezdes")
  bekezdes.innerText = hosszuLista;
}

function szerzoKereses(){
  const szerzo = document.getElementById('szerzo').value;
  const szerzoKer = quotes.map((quote) => quote.author);
  let szamlalo = 0;
  szerzoKer.forEach((item) => {
    if(item == szerzo){
      szamlalo++;
    }
  });
  document.getElementById('szam').value = szamlalo;
}

document.addEventListener("DOMContentLoaded", init);