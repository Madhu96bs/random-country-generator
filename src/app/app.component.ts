import { Component } from '@angular/core';
import arrayWords from "../utils/words";
import arrayCountries from "../utils/countries";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-generator';

  words = '';
  limit = 10;
  randomNum = 0;
  country = '';

  handleSlider = (newLimit:number)=>{
    this.limit = newLimit
  }

  generator = ()=>{
    this.words = arrayWords.slice(0,this.limit).join(' ')
  }

  random(){
    this.randomNum = Math.floor(Math.random() * arrayCountries.length)
   this.country = arrayCountries[this.randomNum];
    console.log(arrayCountries[this.randomNum])
  }

  

}
