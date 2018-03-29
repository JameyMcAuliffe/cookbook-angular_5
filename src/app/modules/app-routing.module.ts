import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeListComponent } from '../recipe-list/recipe-list.component';
import { RecipeItemComponent } from '../recipe-item/recipe-item.component';
import { HomeComponent } from '../core/home/home.component';

const appRoutes: Routes = [
	{path: '', component: HomeComponent},
	//lazy loading
	{path: 'recipes', loadChildren: './recipes.module#RecipesModule'}
	//pathMatch: only redirects if the full path is empty
	//{path: '', redirectTo: '/recipes', pathMatch: 'full'}
];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
}) 

export class AppRoutingModule {
	//bundles routing functionality 
}
