import { Component } from '@angular/core';
import { Person } from '../person';
import { PersonLsService } from '../person-ls.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent {
  person: Person = {
    address: {}
  };

  constructor(private personService: PersonLsService, private route: Router){}


  save(): void{
    this.personService.addPerson(this.person);
    this.route.navigate(['/list']);
  }
}
