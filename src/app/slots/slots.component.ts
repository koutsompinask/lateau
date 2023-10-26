import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.css']
})
export class SlotsComponent implements OnInit {
  icon_width = 80;
  icon_height = 79;
  num_icons = 9;
  indexes = [0, 0, 0];
  time_per_icon = 100;

  ngOnInit() {
    //this.rollAll();
  }

  async sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  change(reel, offset) {
    const delta = (offset + 2) * this.num_icons + Math.round(Math.random() * this.num_icons);
    var add=0;
    if (reel.style.backgroundPositionY.endsWith('px')){
      add=parseFloat(reel.style.backgroundPositionY.replace('px',''));
    }
    const targetBgPosY = delta * (this.icon_height) + add ;
    console.log(targetBgPosY,reel.style.backgroundPositionY);

    reel.style.transition = `background-position-y ${2 + delta * this.time_per_icon}ms`;
    reel.style.backgroundPositionY = `${targetBgPosY}px`;

  }

  rollAll() {
    const reelsArray = Array.from(document.querySelectorAll('.slots > .reel'));
    for (let i = 0; i < reelsArray.length; i++) {
      const reel = reelsArray[i];
      console.log(reel, i);
      this.change(reel, i);
    }
  }
}
