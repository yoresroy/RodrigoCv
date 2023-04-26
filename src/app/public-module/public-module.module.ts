import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PrimeComponentsModule } from '../prime-components/prime-components.module';
import { BodyCvComponent } from './body-cv/body-cv.component';



@NgModule({
  declarations: [
    NavBarComponent,
    BodyCvComponent
  ],
  imports: [
    CommonModule,
    PrimeComponentsModule
  ],
  exports: [
    NavBarComponent,
    BodyCvComponent
  ]
})
export class PublicModuleModule { }
