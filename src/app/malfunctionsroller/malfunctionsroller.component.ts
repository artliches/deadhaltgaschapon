import { Component, OnInit } from '@angular/core';
import { MALFUNCTIONS, RANDOMCHANGESSAYING } from '../itemList.contants';
import { RandomNumberGeneratorService } from '../random-number-generator.service';

@Component({
  selector: 'app-malfunctionsroller',
  templateUrl: './malfunctionsroller.component.html',
  styleUrls: ['./malfunctionsroller.component.scss']
})
export class MalfunctionsrollerComponent {
  changesText = '';
  lastSaying = -1;
  malfunction: any;

  constructor(
    private randNum: RandomNumberGeneratorService
  ) { }

  getMalfunction() {
    const totalNumber = this.randNum.getSumOfRandomDice(6, 6);
    this.malfunction = MALFUNCTIONS.find(x => x.num === totalNumber);

    const count = RANDOMCHANGESSAYING.length;
    let saying = this.randNum.getRandomNumber(0, count - 1);

    if (this.lastSaying && this.lastSaying === saying) {
      do {
        saying = this.randNum.getRandomNumber(0, count - 1);
      } while (saying === this.lastSaying);
    }
    this.lastSaying = saying;
    this.changesText = RANDOMCHANGESSAYING[saying];
  }

}
