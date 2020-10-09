import { Component } from '@angular/core';
import { GASHAPONITEMS } from './itemList.contants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  goldAmount = 0;
  gaschaResult = 0;
  itemDescrip = '';

  pullLever(isCursedGold: boolean): void {
    if (isCursedGold) {
      this.gaschaResult = this.getRandomNumber(1, 100);
    } else {
      this.gaschaResult = this.goldAmount + this.getRandomNumber(1, 6) > 100 ? 100 : this.goldAmount + this.getRandomNumber(1, 6);
    }
    this.itemDescrip = `assets/${GASHAPONITEMS[this.gaschaResult - 1].descrip}.png`;
  }

  getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
}
