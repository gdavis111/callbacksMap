var words = ["ground", "control", "to", "major", "tom"];

var map = function(word, func) {
  var finalArray = [];
  for (var i = 0; i < word.length; i++) {
    finalArray.push(func(word[i]));
  }
  console.log(finalArray);
}


map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});
