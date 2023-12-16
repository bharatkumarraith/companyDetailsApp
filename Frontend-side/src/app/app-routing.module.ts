import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { IsauthGuard } from './Guards/authentication.guard';

const routes: Routes = [
 
  { path: 'login', component: LoginComponent},
  {path:'signup',component:RegistrationComponent},
  {path:'employee',component:EmployeeDetailsComponent,canActivate:[IsauthGuard] },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
