
function longestWord(sentence){
let words = sentence.split(' ')
let countedWord = '';
for (let i = 0; i < words.length; i++){
let trimmedWords = words[i].trim();
  if(trimmedWords.length >= countedWord.length){
  countedWord = trimmedWords;
  }
}
  return countedWord;
}


function shortestWord(sentence){
let theWords = sentence.split(' ');
let theShortWord = theWords[0];
 for ( let i = 0; i < theWords.length; i++){
 let trimmedShortWord = theWords[i].trim();
  if (trimmedShortWord.length <= theShortWord.length){
  theShortWord = trimmedShortWord;
  }
 }
  return theShortWord;
}


function wordLengths(sentence){
 let totalWords = 0;
let wholeSentence = sentence.split(' ');
for (let i = 0; i < wholeSentence.length; i++){
let trimmedSentenceWord = wholeSentence[i].trim();
  totalWords = totalWords + trimmedSentenceWord.length;
}
  return totalWords;
}
