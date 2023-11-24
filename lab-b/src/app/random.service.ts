import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  constructor() { }

  randomNumber(max:number): number {
    return Math.floor(Math.random() * max) + 1; 
  }
}
