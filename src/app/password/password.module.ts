import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasswordPageRoutingModule } from './password-routing.module';

import { PasswordPage } from './password.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    PasswordPageRoutingModule
  ],
  declarations: [PasswordPage]
})
export class PasswordPageModule {}
