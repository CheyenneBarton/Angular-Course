import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppngListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
          'A Test Recipe',
          'This is the description',
          'https://static01.nyt.com/images/2022/03/02/dining/kc-pasta-amatriciana/merlin_201502869_17a64c2f-adee-4526-9951-a0b03270b022-superJumbo.jpg?quality=75&auto=webp',
       [
        new Ingredient('Pasta', 1),
        new Ingredient('Sauce', 20)
       ] ),
        new Recipe(
          'A Second Test Recipe',
          'This is another description',
          'https://www.tastingtable.com/img/gallery/steakburger-vs-hamburger-whats-the-biggest-difference/intro-1657643502.webp',
        [
            new Ingredient('Buns',2),
            new Ingredient('Meat', 1)
        ]),
      ];

      constructor(private slService: ShoppngListService) {
      }

      getRecipes(){
        return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
      }
}