import { Component, OnInit } from '@angular/core';
import { PersonLsService } from '../person-ls.service';
import { Person } from '../person';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  people: Person[] = [];
  constructor(private peopleService: PersonLsService){
  }

  ngOnInit(){
    this.people = this.peopleService.getAll();
  }

  delete(index:number):void{
  if(confirm("Are you sure?")){    
    this.peopleService.deletePerson(index);
    this.people = this.peopleService.getAll();
  }
  }
}
