import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnterSampleComponent } from './enter-sample/enter-sample.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SampleComponent } from './sample/sample.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"addtest",component:EnterSampleComponent},
  {path:"register",component:RegisterComponent ,data:{roles:["admin"]}, canActivate:[AuthGuard]},
  {path:"sample",component:SampleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
