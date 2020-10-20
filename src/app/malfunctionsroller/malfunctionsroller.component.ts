import { Component, OnInit } from '@angular/core';
import { MALFUNCTIONS, RANDOMCHANGESSAYING } from '../itemList.contants';
import { RandomGeneratorService } from '../random-number-generator.service';

@Component({
  selector: 'app-malfunctionsroller',
  templateUrl: './malfunctionsroller.component.html',
  styleUrls: ['./malfunctionsroller.component.scss']
})
export class MalfunctionsrollerComponent {
  changesText: any;
  lastSaying = -1;
  malfunction: any;

  constructor(
    private rand: RandomGeneratorService
  ) { }

  getMalfunction() {
    const totalNumber = this.rand.getSumOfRandomDice(6, 6);
    this.malfunction = MALFUNCTIONS.find(x => x.num === totalNumber);

    this.changesText = this.rand.getRandomSaying(RANDOMCHANGESSAYING, this.lastSaying);
    this.lastSaying = this.changesText.lastIndex;
  }

}
