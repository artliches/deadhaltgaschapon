import { Component, OnInit } from '@angular/core';
import { BODYPARTS, MODS, RANDOMSAYING } from '../itemList.contants';
import { RandomNumberGeneratorService } from '../random-number-generator.service';

@Component({
  selector: 'app-modsroller',
  templateUrl: './modsroller.component.html',
  styleUrls: ['./modsroller.component.scss']
})
export class ModsrollerComponent implements OnInit {
  bodyPart: string;
  replacement: any;
  lastSaying = -1;

  constructor(
    private randNum: RandomNumberGeneratorService
  ) { }

  ngOnInit() {
  }

  getAMod(needsAMod: boolean) {
    if (needsAMod) {
      this.bodyPart = BODYPARTS[this.randNum.getRandomNumber(0, 5)];
      this.replacement = MODS.find(x => x.body === this.bodyPart).replacement[this.randNum.getRandomNumber(0, 5)];
    } else {
      const count = RANDOMSAYING.length;
      let saying = this.randNum.getRandomNumber(0, count - 1);

      if (this.lastSaying && this.lastSaying === saying) {
        do {
          saying = this.randNum.getRandomNumber(0, count - 1);
        } while (saying === this.lastSaying);
      }
      this.replacement = RANDOMSAYING[saying];
      this.lastSaying = saying;
    }

  }
}
