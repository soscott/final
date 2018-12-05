import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Brightness } from '@ionic-native/brightness';
import { Flashlight } from '@ionic-native/flashlight';
import { Vibration } from '@ionic-native/vibration';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private brightness: Brightness, private flashlight: Flashlight, private vibration: Vibration) {

  }

  drainBattery(){
    let brightnessValue = 1;
    this.brightness.setBrightness(brightnessValue);
    this.flashlight.switchOn();
    this.vibration.vibrate(1000);
  }
  stopDrain(){
    let brightnessValue = 0.5;
    this.brightness.setBrightness(brightnessValue);
    this.vibration.vibrate(0);
    this.flasghlight.switchOff();

  }


}
