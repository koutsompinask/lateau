import { Component } from '@angular/core';

@Component({
  selector: 'app-sweets',
  templateUrl: './sweets.component.html',
  styleUrls: ['./sweets.component.css']
})
export class SweetsComponent {
  isClicked : boolean = false;

  singleSweets = [
    {
      'name' : 'Σοκολατίνα',
      'price' : 3.50,
      'img' : '../../assets/sokolatina.webp' 
    },
    {
      'name' : 'Φράουλα',
      'price' : 3.50,
      'img' : '../../assets/fraoula.webp' 
    },
    {
      'name' : 'Αμυγδάλου',
      'price' : 3.50,
      'img' : '../../assets/amigdalou.webp' 
    },
    {
      'name' : 'Πραλίνα Μπισκότο',
      'price' : 3.50,
      'img' : '../../assets/sokolatina.webp' 
    }
  ]

  familySweets = [
    {
      'name' : 'Σοκολατόπιτα',
      'img' : '../../assets/sokolatopita.webp',
      'price' : 20.00
    },
    {
      'name' : 'Πορτοκαλόπιτα',
      'img' : '../../assets/portokalopita.webp',
      'price' : 20.00
    },
    {
      'name' : 'Cake Red Velvet',
      'img' : '../../assets/cake_red_velvet.webp',
      'price' : 8.00
    },
    {
      'name' : 'Cake Σοκολάτας',
      'img' : '../../assets/cake_red_velvet.webp',
      'price' : 8.00
    }
  ]


  toggle(){
    this.isClicked = !this.isClicked;
  }


}
