import { NgModule } from "@angular/core";
import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";
import { CommonModule } from "@angular/common";
import { ListclearComponent } from './listclear/listclear.component';



@NgModule({
  declarations:[
    HeroComponent,
    ListComponent,
    ListclearComponent,
  ],
  exports : [
    HeroComponent,
    ListComponent,
  ],
  imports : [
    CommonModule
  ]
})
export class HeroesModule {}



