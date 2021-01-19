function shoppingList(arrayOfPeople) {
  let content = document.getElementById('content');
  let str = '<ul>';
  shopping.forEach(el => str += `<li>${el}</li>`);
  str += '</ul>';
  content.innerHTML = str;
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
