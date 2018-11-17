import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarsizePage } from './carsize';

@NgModule({
  declarations: [
    CarsizePage,
  ],
  imports: [
    IonicPageModule.forChild(CarsizePage),
  ],
})
export class CarsizePageModule {}
