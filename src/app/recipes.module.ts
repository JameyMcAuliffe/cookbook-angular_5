import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { RecipesComponent } from './recipes/recipes.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { DropdownDirective } from './dropdown.directive';
import { RecipesRoutingModule } from './recipes-routing.module';

@NgModule({
	declarations: [
		RecipesComponent,
		RecipeDetailComponent,
		RecipeEditComponent,
		RecipeItemComponent,
		RecipeListComponent,
		RecipeStartComponent,
		DropdownDirective
	],
	imports: [ReactiveFormsModule, CommonModule, RecipesRoutingModule]
})
export class RecipesModule {

}
