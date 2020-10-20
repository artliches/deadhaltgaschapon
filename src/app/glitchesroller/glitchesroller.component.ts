import { Component, OnInit } from '@angular/core';
import { GLITCHES } from '../itemList.contants';
import { RandomGeneratorService } from '../random-number-generator.service';

@Component({
  selector: 'app-glitchesroller',
  templateUrl: './glitchesroller.component.html',
  styleUrls: ['./glitchesroller.component.scss']
})
export class GlitchesrollerComponent {
  glitch: any;

  constructor(
    private rand: RandomGeneratorService
  ) { }

  getGlitch() {
    const totalNumber = this.rand.getSumOfRandomDice(3, 6);
    this.glitch = GLITCHES.find(x => x.num === totalNumber);
  }

}
