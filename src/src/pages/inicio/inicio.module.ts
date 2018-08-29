import { NgModule } from '@angular/core';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { InicioPage } from './inicio';

@NgModule({
  declarations: [
    InicioPage,
    
  ],
  imports: [
    IonicPageModule.forChild(InicioPage)
    
  ],
})
export class InicioPageModule {}
