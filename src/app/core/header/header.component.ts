import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { ServerService } from '../../services/server.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private serverService: ServerService,
              private authService: AuthService) { }

  ngOnInit() {
  }

  onSaveData() {
  	this.serverService.storeRecipes()
  		.subscribe(
  			(response: Response) => {
  				console.log(response);
  			}
  		);
  }

  onFetchData() {
  	this.serverService.getRecipes();
  }

  onLogout() {
    this.authService.logout();
  }

}
