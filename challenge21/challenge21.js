const chooseRecipe = function(bakeryA, bakeryB, recipes) {

  var recipesA = checkBakery(bakeryA,recipes);
  var recipesB = checkBakery(bakeryB,recipes);
  
  for (var recipe of recipesA){
    if (recipesB.includes(recipe)){
      return recipe;
    }
  }
  return 'no recipe found'
}

const checkBakery = function (bakery, recipes){
  var validRecipes = [];
  for(var ingredient of bakery){
    for (var recipe of recipes){
      if (recipe['ingredients'].includes(ingredient)){
        validRecipes.push(recipe['name']);
      }
    }
  }
  return validRecipes;
}

/*

Input:

    const bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard']
    const bakeryB = ['milk', 'butter', 'cream cheese']
    const recipes = [
        {
            name: 'Coconut Sponge Cake',
            ingredients: ['coconut', 'cake base']
        },
        {
            name: 'Persian Cheesecake',
            ingredients: ['saffron', 'cream cheese']
        },
        {
            name: 'Custard Surprise',
            ingredients: ['custard', 'ground beef']
        }
    ]
    
Output:
Persian Cheesecake

*/
