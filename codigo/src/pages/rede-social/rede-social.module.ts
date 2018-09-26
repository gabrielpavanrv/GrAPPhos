import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RedeSocialPage } from './rede-social';
import { KatexModule } from 'ng-katex/ng-katex.js';


@NgModule({
  declarations: [
    RedeSocialPage,
  ],
  imports: [
    IonicPageModule.forChild(RedeSocialPage),
    KatexModule
  ],
})
export class RedeSocialPageModule {}
