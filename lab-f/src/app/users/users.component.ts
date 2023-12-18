import { Component } from '@angular/core';
import { User } from '../user';
import { DataService } from '../data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {


  public users: User[] = [];
  constructor(
    private dataService: DataService,
  ){

  }



  ngOnInit(): void {
    this.dataService.users().subscribe(users =>{
      this.users = users;
    } )
  }
}
