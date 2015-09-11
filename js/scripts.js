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

$(document).ready(function() {
  $("form#find_and_replace").submit(function(event) {
    var input = $("input#input").val();
    // debugger;
    var findString = ($("input#findString").val());
    var replaceString = ($("input#replaceString").val());
    var result = find_and_replace(input, findString, replaceString);

    $(".result").text(result);

    $("#result").show();
    event.preventDefault();
  });
});
