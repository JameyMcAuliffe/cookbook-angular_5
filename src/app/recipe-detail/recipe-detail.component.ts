import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

	recipe: Recipe;
	id: number

  constructor(private route: ActivatedRoute,
  						private recipeService: RecipeService,
              private router: Router) { }

  ngOnInit() {
  	this.route.params	
  		.subscribe(
  			(params: Params) => {
  				this.id = +params['id'];
  				this.recipe = this.recipeService.getRecipe(this.id);
  			}
  		);
  }

  editRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    //*****relative path going up one level with id param*****
    //this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
    //*****absolute path with id param*****
    //this.router.navigate(['recipes', this.id, 'edit'])
  }

}
