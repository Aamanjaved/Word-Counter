let sentence = prompt("Type Word");
let words = sentence.split(" ");
let wordCount = 0;

for (let i = 0; i < words.length; i++) {
  if (words[i] !== "") {
    wordCount++;
  }
}

alert(wordCount);