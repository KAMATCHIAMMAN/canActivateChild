import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'canActivateChild';
  constructor(private authserives:AuthService){}

  login(){
    this.authserives.login();
  }
  logout(){
    this.authserives.logout();
  }
}
