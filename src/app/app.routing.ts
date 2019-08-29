import { Routes,RouterModule } from "@angular/router";
import { CardComponent } from './card/card.component';


const arr : Routes=[
  {path:'',component:CardComponent},

];

export const routing=RouterModule.forRoot(arr);
