import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ComplaintRegistrationComponent } from './complaint-registration/complaint-registration.component';

const routes: Routes = [
  {path:'',component: HeaderComponent},
  {path:'signup',component:SignupComponent },
  {path:'login',component:LoginComponent},
  {path:'complaint',component:ComplaintRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }