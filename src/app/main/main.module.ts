import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { SectionsComponent } from './sections/sections.component';

@NgModule({
  declarations: [MenuComponent, SectionsComponent],
  imports: [
    CommonModule
  ]
})
export class MainModule { }
