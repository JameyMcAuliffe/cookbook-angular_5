import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../services/recipe.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  //undefined property to set as recipes array from service
	recipes: Recipe[];
  subscirption: Subscription;

  constructor(private recipeService: RecipeService,
  						private router: Router,
  						private route: ActivatedRoute) { }

  ngOnInit() {
    this.subsciprtion = this.recipeService.recipesChanged
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipes = recipes;
        }
      )
    this.recipes = this.recipeService.getRecipes();
  }

  ngOnDestroy() {
    this.subscirption.unsubscribe();
  }

  onNewRecipe() {
  	this.router.navigate(['new'], {relativeTo: this.route});
  }

}
