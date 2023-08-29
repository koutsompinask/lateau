import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './history/history.component';
import { SweetsComponent } from './sweets/sweets.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:'history', component: HistoryComponent},
  {path:'sweets' , component: SweetsComponent},
  {path:'about',component:AboutComponent},
  {path: '', redirectTo: 'history' , pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
