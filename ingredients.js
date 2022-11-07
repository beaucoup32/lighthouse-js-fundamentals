const ingredients = [
  "eggs",
  "milk",
  "flour",
  "sugar",
  "baking soda",
  "baking powder",
  "chocolate chips",
  "bananas",
];

let x = 0;
while (x < ingredients.length) {
  console.log(ingredients[x]);
  ++x;
}

for (let row = 0; row < ingredients.length; ++row) {
  console.log(ingredients[row]);
}

//loop reverses array order
for (let n = ingredients.length - 1; n >= 0; --n) {
  console.log(ingredients[n]);
}