import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  common = new Audio("./assets/Fart-Common-Everyday-Fart_Mike-Koenig.mp3");
  quick = new Audio("./assets/Quick Fart-SoundBible.com-655578646.mp3");
  silly = new Audio("./assets/Silly_Farts-Joe-1473367952.mp3");
  mower = new Audio("./assets/Lawn Mower Fart-SoundBible.com-771525987.mp3");
  raspberry = new Audio("./assets/Uuuuuu-Paula-1357936016.mp3");

  constructor(){

  }

  commonFart(){
    this.common.play();
  }

  quickFart(){
    this.quick.play();
  }

  sillyFart(){
    this.silly.play();
  }

  mowerFart(){
    this.mower.play();
  }

  raspberryFart(){
    this.raspberry.play()
  }




}
