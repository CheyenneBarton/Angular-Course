import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
          'A Test Recipe',
          'This is the description',
          'https://static01.nyt.com/images/2022/03/02/dining/kc-pasta-amatriciana/merlin_201502869_17a64c2f-adee-4526-9951-a0b03270b022-superJumbo.jpg?quality=75&auto=webp'
        ),
        new Recipe(
          'A Second Test Recipe',
          'This is another description',
          'https://static01.nyt.com/images/2022/03/02/dining/kc-pasta-amatriciana/merlin_201502869_17a64c2f-adee-4526-9951-a0b03270b022-superJumbo.jpg?quality=75&auto=webp'
        ),
      ];

      getRecipes(){
        return this.recipes.slice();
      }
}