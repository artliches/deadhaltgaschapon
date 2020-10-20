import { Component, OnInit } from '@angular/core';
import { BODYPARTS, MODS, RANDOMSAYING } from '../itemList.contants';
import { RandomGeneratorService } from '../random-number-generator.service';

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
    private rand: RandomGeneratorService
  ) { }

  ngOnInit() {
  }

  getAMod(needsAMod: boolean) {
    if (needsAMod) {
      this.bodyPart = BODYPARTS[this.rand.getRandomNumber(0, 5)];
      this.replacement = MODS.find(x => x.body === this.bodyPart).replacement[this.rand.getRandomNumber(0, 5)];
    } else {
      this.replacement = this.rand.getRandomSaying(RANDOMSAYING, this.lastSaying);
      this.lastSaying = this.replacement.lastIndex;
    }
  }
}
