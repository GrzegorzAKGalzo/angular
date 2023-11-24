import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  listItems: string[];
  inputText: string;

  constructor() {
    this.inputText='';
    this.listItems =[];
  }

  addItem(): void{
    this.listItems.push(this.inputText);
    this.inputText = '';
  }
  remove(index: number): void {
    this.listItems.splice(index, 1);
    
  }
}
