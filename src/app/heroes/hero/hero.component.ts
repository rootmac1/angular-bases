import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name = 'ironman'
  public age = 45

  get capitalizedName():string{
    return this.name.toUpperCase()
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`
  }

  changeHero(){
    this.name =  "Spiderman"
  }

  changeAge(){
    this.age =25
  }

}
