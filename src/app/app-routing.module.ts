import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';

const appRoutes: Routes = [
	//pathMatch: only redirects if the full path is empty
	{path: '', redirectTo: '/recipes', pathMatch: 'full'},
	{path: 'recipes', component: RecipesComponent, children: [
		{path: '', component: RecipeStartComponent},
		{path: 'new', component: RecipeEditComponent},
		{path: ':id', component: RecipeDetailComponent},
		{path: ':id/edit', component: RecipeEditComponent}
	]},
	{path: 'signup', component: SignupComponent},
	{path: 'signin', component: SigninComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
}) 

export class AppRoutingModule {
	//bundles routing functionality 
}
