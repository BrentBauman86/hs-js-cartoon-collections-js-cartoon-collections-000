function dwarfRollCall(dwarves) {
var names = [];
dwarves.forEach(function(name, i) {
    names.push(`${i+1}. ${name} `);
  });
return names.join("")
}

function summonCaptainPlanet(planeteerCalls){
var element = [];
planeteerCalls.forEach(function(element) {
  element = element.toUpperCase() `${"!"}`;
  element.push(element);
});
return element;
}
function summonCaptainPlanet(array) {
  return array.map(function(element) {
    return element.toUpperCase() + "!";
  });
}

function longPlaneteerCalls(words) {
for (var i = 0; i < words.length; i++) {
  if (words[i].length > 4) {
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
