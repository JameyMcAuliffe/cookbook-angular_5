import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipes/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

		recipes: Recipe[] = [
			new Recipe('Recipe 1', 'mmmmmmmm', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBlIAeL3h0ZXldD7Zqsu5qVv5aPsaVjY5Hd4cPUcaF3h5ZvA4A6Q'),
			new Recipe('Recipe 2', 'forbidden donut', 'https://vignette.wikia.nocookie.net/simpsons/images/c/c2/The_Devil_and_Homer_Simpson_21.JPG/revision/latest?cb=20130720154918')
		];

  constructor() { }

  ngOnInit() {
  }

}
