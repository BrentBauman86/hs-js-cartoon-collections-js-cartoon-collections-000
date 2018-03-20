function dwarfRollCall(dwarves) {
var names = [];
dwarves.forEach(function(name, i) {
names.push(`${i+1}. ${name} `);
return names.join(" ")
  }

  function longPlaneteerCalls(arr) {
    for (var i = 0; i < arr.length; i++) {
      if(arr[i].length > 4) {
        return true
      } else {
        return false
      }
    }
  }

function longPlaneteerCalls(words) {
for (var i = 0; i < words.length; i++) {
  if (words.length > 4) {
    return true;
  }
}
return false;
}

function findTheCheese (foods) {
  var cheese = ["camembert", "cheddar", "gouda"];
  for (var i = 0; i < foods.length; i++) {
    var cheesy = cheese.indexOf(foods[i]);
    if (cheesy !== -1) {
      return foods[i];
    }
  }
  return "no cheese!";
}
