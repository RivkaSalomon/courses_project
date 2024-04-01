import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [LoginComponent,RegisterComponent,LogoutComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],

})
export class UserModule { }
