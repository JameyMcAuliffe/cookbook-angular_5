import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipes/recipe.model'
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

	@Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  //method called from click event in recipe-item.html
  //emits a new selectedRecipe event, which is passed to recipe-list component
  selectRecipe() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
