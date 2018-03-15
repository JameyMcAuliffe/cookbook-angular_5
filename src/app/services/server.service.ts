import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { RecipeService } from './recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class ServerService {

	constructor(private http: Http,
							private recipeService: RecipeService) {}

	storeRecipes() {
		return this.http.put('https://ng-cookbook-5c031.firebaseio.com/recipes.json', this.recipeService.getRecipes());
	}

	getRecipes() {
		this.http.get('https://ng-cookbook-5c031.firebaseio.com/recipes.json')
			.subscribe(
				(response: Response) => {
					const recipes: Recipe[] = response.json();
					this.recipeService.setRecipes(recipes);
				}
			)
	}

}
