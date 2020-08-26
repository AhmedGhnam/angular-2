import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model'
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();

  recipes: Recipe[] = [
    new Recipe(
      'pizza',
      'A super-tasty Schnitzel - just awesome',
      'https://www.delonghi.com/Global/recipes/multifry/pizza_fresca.jpg',
      [
      new Ingredient('beef', 3),
      new Ingredient('tomatos', 5)
      ]),
    new Recipe(
      'lazania',
      'What else you need to say?',
      'https://d3fch0cwivr6nf.cloudfront.net/system/uploads/medium/data/12688/lazania-site.jpg',
      [
      new Ingredient('makarona', 7),
      new Ingredient('meat', 6)
      ])

  ];

  constructor(private shoppingListService: ShoppingListService){}

  getRecipes() {
    return this.recipes.slice()
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice())
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipe(newRecipe: Recipe) {
    this.recipes.push(newRecipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number ,newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  addRecipesToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addingIngredients(ingredients);
  }

}
