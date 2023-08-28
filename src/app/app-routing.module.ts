import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './history/history.component';
import { SweetsComponent } from './sweets/sweets.component';

const routes: Routes = [
  {path:'history', component: HistoryComponent},
  {path:'sweets' , component: SweetsComponent},
  {path: '', redirectTo: 'history' , pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
