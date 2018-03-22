import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../modules/shared.module';
import { AppRoutingModule } from '../modules/app-routing.module';
import { RecipeService } from '../services/recipe.service';
import { ServerService } from '../services/server.service';
import { AuthService } from '../auth/auth.service';
import { AuthGuard } from '../auth/auth-guard.service';

@NgModule({
	declarations: [
		HeaderComponent, 
		HomeComponent
	],
	imports: [
		SharedModule, 
		AppRoutingModule
	],
	exports: [
		AppRoutingModule,
		HeaderComponent
	],
	providers: [RecipeService, ServerService, AuthService, AuthGuard]
})
export class CoreModule {}
