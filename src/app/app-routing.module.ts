import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './components/employees/employees.component';
import { RegisterationComponent } from './components/employees/registeration/registeration.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
{path: 'login', component: LoginComponent},
{ path: 'employees', component: EmployeesComponent},
{ path: 'register', component: RegisterationComponent},
{ path: '', redirectTo: 'login', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
