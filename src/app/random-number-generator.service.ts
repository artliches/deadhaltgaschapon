import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomNumberGeneratorService {

  constructor() { }

  getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  getSumOfRandomDice(numberOfDice: number, numSides: number) {
    let sumOfDice = 0;
    for (let i = 0; i < numberOfDice; i++) {
      sumOfDice += this.getRandomNumber(1, numSides);
    }
    return sumOfDice;
  }
}
