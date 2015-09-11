var find_and_replace = function(input, findString, replaceString) {
  var newString = [];
  var input = input.split(" ");
  for (var i = 0; i < input.length; i++) {
    if (input[i] !== findString) {
      newString.push(input[i]);
    } else {
      newString.push(replaceString);
    }
  };
  newString = newString.join(" ");
  return newString;
};
