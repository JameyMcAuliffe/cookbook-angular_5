import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipes/recipe.model'

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

	@Input() recipe: Recipe;
	@Output() recipeSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  //method called from click event in recipe-item.html
  //emits a new selectedRecipe event, which is passed to recipe-list component
  selectRecipe() {
  	this.recipeSelected.emit();
  }

}
