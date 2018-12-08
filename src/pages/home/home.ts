import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Brightness } from '@ionic-native/brightness';
import { Flashlight } from '@ionic-native/flashlight';
import { Vibration } from '@ionic-native/vibration';
import { BatteryStatus } from '@ionic-native/battery-status';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private brightness: Brightness, private flashlight: Flashlight, private vibration: Vibration,private batteryStatus: BatteryStatus) {

  }




  drainBattery(){
    let brightnessValue = 1;
    this.brightness.setBrightness(brightnessValue);
    this.flashlight.switchOn();
    this.vibration.vibrate(100000);
    //display image toggle
    var x = document.getElementById("batteryHigh");
    var y = document.getElementById("batteryLow");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
    } else {
        x.style.display = "none";
        y.style.display = "block";

    }
    window.addEventListener("batterylow", onBatteryLow, false);

    function onBatteryLow(status){
        alert("Battery Level Low " + status.level + "%");
    }
        }

  stopDrain(){
    let brightnessValue = 0.5;
    this.brightness.setBrightness(brightnessValue);
    this.vibration.vibrate(0);
    this.flashlight.switchOff();
    //display image toggle
    var x = document.getElementById("batteryHigh");
    var y = document.getElementById("batteryLow");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
    } else {
        x.style.display = "none";
        y.style.display = "block";

    }

    }





  }
