import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab-f';
  public username = this.authService.getUsername();
  constructor(
    private authService: AuthService,
  ){}

  public canAccessUsers(): boolean{
    return this.authService.isAdmin();
  }
  public canAccessItems(): boolean{
    return this.authService.isAuth();
  }
  public logout(): void{
    this.authService.logout();
  }
}
