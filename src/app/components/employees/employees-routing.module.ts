import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterationComponent } from './registeration/registeration.component';

const routes: Routes = [
  {path: 'register', component: RegisterationComponent},
  
  { path: '', redirectTo: 'register', pathMatch: 'full' }];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
