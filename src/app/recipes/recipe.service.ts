import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { Ingredient } from "../shared/ingredient.model";
import { ShoppngListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>

    // private recipes: Recipe[] = [
    //     new Recipe(
    //       'A Test Recipe',
    //       'This is the description',
    //       'https://www.allrecipes.com/thmb/5SdUVhHTMs-rta5sOblJESXThEE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/11691-tomato-and-garlic-pasta-ddmfs-3x4-1-bf607984a23541f4ad936b33b22c9074.jpg',
    //    [
    //     new Ingredient('Pasta', 1),
    //     new Ingredient('Sauce', 20)
    //    ] ),
    //     new Recipe(
    //       'A Second Test Recipe',
    //       'This is another description',
    //       'https://www.tastingtable.com/img/gallery/steakburger-vs-hamburger-whats-the-biggest-difference/intro-1657643502.webp',
    //     [
    //         new Ingredient('Buns',2),
    //         new Ingredient('Meat', 1)
    //     ]),
    //   ];
    
private recipes: Recipe[] =[];

      constructor(private slService: ShoppngListService) {
      }

      setRecipes(recipes: Recipe[]) {
        this.recipes=recipes;
        this.recipesChanged.next(this.recipes.slice())
      }

      getRecipes(){
        return this.recipes.slice();
      }

      getRecipe(index:number) {
        return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
      }

      addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice())
      }

      updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index]= newRecipe;
        this.recipesChanged.next(this.recipes.slice())
      }

      deleteRecipe(index: number) {
        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice())
      }
}