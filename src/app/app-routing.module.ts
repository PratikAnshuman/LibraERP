import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    MDBBootstrapModule.forRoot(),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
