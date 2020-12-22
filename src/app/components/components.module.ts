import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LibraryModule } from '../library/library.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LibraryModule
  ],
  exports: [
    LibraryModule
  ]
})
export class ComponentsModule { }
