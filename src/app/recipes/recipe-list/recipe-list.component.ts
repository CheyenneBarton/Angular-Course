import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
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

  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
