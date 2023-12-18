import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  public totalElemetns = 0;
  constructor(
    private dataService: DataService,
  ){

  }

  ngOnInit(): void {
    this.dataService.items().subscribe(itemsList =>{
      this.totalElemetns = itemsList.totalElements
    } )
  }
}
