import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomGeneratorService {

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

  getRandomSaying(sayingArray: string[], lastSayingIndex: number) {
    const count = sayingArray.length;
    let sayingIndex = this.getRandomNumber(0, count - 1);

    if (lastSayingIndex && lastSayingIndex === sayingIndex) {
      do {
        sayingIndex = this.getRandomNumber(0, count - 1);
      } while (sayingIndex === lastSayingIndex);
    }
    lastSayingIndex = sayingIndex;

    return {
      saying: sayingArray[sayingIndex],
      lastIndex: lastSayingIndex
    };
  }
}
