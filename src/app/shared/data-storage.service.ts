import { AuthService } from './../auth/auth.service';
import { Recipe } from './../recipes/recipe.model';
import { RecipeService } from './../recipes/recipe.service';
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators/map';



@Injectable()
export class DataStorageService {
  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService){}

  storeRecipes() {
    const token = this.authService.getToken();
    return this.httpClient.
    put('https://ng-recipe-book-159d8.firebaseio.com/recipes.json?auth=' + token , this.recipeService.getRecipes() )
  }

  getRecipes() {
    const token = this.authService.getToken();
    return this.httpClient.get('https://ng-recipe-book-159d8.firebaseio.com/recipes.json?auth=' + token).
    pipe(
      map(
        (res: Recipe[]) => {
          const recipes = res;
          for(let recipe of recipes) {
            if(!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;

        }
      )
    )
    .subscribe(
      (res: Recipe[]) => {
        const recipes = res;
        console.log(recipes);
        this.recipeService.setRecipes(recipes);

      })
  }
}
