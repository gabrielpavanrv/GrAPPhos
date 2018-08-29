import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExplorarPage } from './explorar';

@NgModule({
  declarations: [
    ExplorarPage,
  ],
  imports: [
    IonicPageModule.forChild(ExplorarPage),
  ],
})
export class ExplorarPageModule {}
