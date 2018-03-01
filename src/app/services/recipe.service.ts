
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../recipes/ingredient.model';
import { Subject } from 'rxjs/Subject';


export class RecipeService {
	recipesChanged = new Subject<Recipe[]>();


	private recipes: Recipe[] = [
		new Recipe(
			'Recipe 1', 
			'mmmmmmmm', 
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBlIAeL3h0ZXldD7Zqsu5qVv5aPsaVjY5Hd4cPUcaF3h5ZvA4A6Q',
			[
				new Ingredient('Fish', '1', 'pound'),
				new Ingredient('Shrimp', '8', 'pieces')

			]),
		new Recipe(
			'Recipe 2', 
			'forbidden donut', 
			'https://vignette.wikia.nocookie.net/simpsons/images/c/c2/The_Devil_and_Homer_Simpson_21.JPG/revision/latest?cb=20130720154918',
			[
				new Ingredient('Donut', 'Just 1', 'Forbidden Donut')
			])
	];

	getRecipes() {
		//slice method with no args returns exact copy of recipe array
		return this.recipes.slice();
	}

	getRecipe(index: number) {
		return this.recipes[index];
	}

	addRecipe(recipe: Recipe) {
		this.recipes.push(recipe);
		this.recipesChanged.next(this.recipes.slice());
	}

	updateRecipe(index: number, newRecipe: Recipe) {
		this.recipes[index] = newRecipe;
		this.recipesChanged.next(this.recipes.slice());
	}
}
