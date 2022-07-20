// Question #3
// Reverse each word in the sentence
// For example Welcome to this Javascript Guide! should be become
// emocleW ot siht tpircsavaJ  !ediuG
function reverseWord(sentence) {
  return sentence
    .split(" ")
    .map(function (word) {
      return word.split("").reverse().join("");
    })
    .join(" ");
}

console.log(reverseWord("Welcome to this Javascript Guide!"));
