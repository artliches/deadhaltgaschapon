import { Component, OnInit } from '@angular/core';
import { GASHAPONITEMS } from '../itemList.contants';
import { RandomNumberGeneratorService } from '../random-number-generator.service';


@Component({
  selector: 'app-gashapon',
  templateUrl: './gashapon.component.html',
  styleUrls: ['./gashapon.component.scss']
})
export class GashaponComponent {
  goldAmount = 0;
  gaschaResult = 0;
  itemDescrip = '';

  constructor(
    private randNum: RandomNumberGeneratorService
  ) { }

  pullLever(isCursedGold: boolean): void {
    if (isCursedGold) {
      this.gaschaResult = this.randNum.getSumOfRandomDice(1, 100);
    } else {
      this.goldAmount = this.goldAmount < 0 ? 0 : this.goldAmount;
      this.gaschaResult = this.goldAmount + this.randNum.getSumOfRandomDice(1, 6) > 100 ? 100 :
        this.goldAmount + this.randNum.getSumOfRandomDice(1, 6);
    }
    this.itemDescrip = `assets/${GASHAPONITEMS[this.gaschaResult - 1].descrip}.png`;
  }
}
