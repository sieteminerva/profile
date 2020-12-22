import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExternalModule } from './external.module';
import { SlideParallaxComponent } from './slide-parallax/slide-parallax.component';
import { RoundIndicatorComponent } from './round-indicator/round-indicator.component';

@NgModule({
  declarations: [
    SlideParallaxComponent,
    RoundIndicatorComponent
  ],
  imports: [
    CommonModule,
    ExternalModule
  ],
  exports: [
    SlideParallaxComponent,
    ExternalModule,
    RoundIndicatorComponent
  ]
})
export class LibraryModule { }
