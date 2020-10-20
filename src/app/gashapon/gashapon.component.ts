import { Component, OnInit } from '@angular/core';
import { GASHAPONITEMS, RANDOMCHANGESSAYING, RANDOMITEMSAYING } from '../itemList.contants';
import { RandomGeneratorService } from '../random-number-generator.service';


@Component({
  selector: 'app-gashapon',
  templateUrl: './gashapon.component.html',
  styleUrls: ['./gashapon.component.scss']
})
export class GashaponComponent {
  goldAmount = 0;
  gaschaResult = 0;
  itemDescrip = '';
  lastSaying = -1;
  randomSaying: any;

  constructor(
    private rand: RandomGeneratorService
  ) { }

  pullLever(isCursedGold: boolean, extraGold?: number): void {
    if (isCursedGold) {
      this.gaschaResult = this.rand.getSumOfRandomDice(1, 100);
    } else {
      extraGold = extraGold ? extraGold : 0;
      this.goldAmount = this.goldAmount < 0 ? 0 : this.goldAmount;
      this.gaschaResult = this.goldAmount + extraGold + this.rand.getSumOfRandomDice(1, 6) > 100 ? 100 :
        this.goldAmount + extraGold + this.rand.getSumOfRandomDice(1, 6);
    }
    this.randomSaying = this.rand.getRandomSaying(RANDOMITEMSAYING, this.lastSaying);
    this.lastSaying = this.randomSaying.lastIndex;
    this.itemDescrip = `assets/${GASHAPONITEMS[this.gaschaResult - 1].descrip}.png`;
  }
}
