import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { ViewAllDataComponent } from './view-all-data/view-all-data.component';

const routes: Routes = [
  {path :'', redirectTo:'user',pathMatch:'full'} ,
  {path :'user', component :UserRegisterComponent} ,
  {path :'view', component :ViewAllDataComponent},
 {path:'update/:id', component:UpdateUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
