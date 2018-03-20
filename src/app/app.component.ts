import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

//import { RecipesService } from './services/recipes.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //providers: [RecipesService]
})
export class AppComponent implements OnInit{

	//constructor(private recipesService: RecipesService) {}
	
	ngOnInit() {
		firebase.initializeApp({
			apiKey: "AIzaSyAFS9rM-3isPcmh06_93lX5a4Gjs8XjAhA",
    	authDomain: "ng-cookbook-5c031.firebaseapp.com"
		})
	}
 
}
