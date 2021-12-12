import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkeraccoutPageRoutingModule } from './workeraccout-routing.module';

import { WorkeraccoutPage } from './workeraccout.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    WorkeraccoutPageRoutingModule
  ],
  declarations: [WorkeraccoutPage]
})
export class WorkeraccoutPageModule {}
