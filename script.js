var sentence = prompt("Type Word");
var words = sentence.split(" ");
var wordCount = 0;

for (var i = 0; i < words.length; i++) {
  if (words[i] !== "") {
    wordCount++;
  }
}

alert(wordCount);
