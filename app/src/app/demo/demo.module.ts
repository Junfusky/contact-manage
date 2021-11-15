import { DemoRoutingModule } from './demo-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './../shared/material.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { FormsModule } from '@angular/forms';
import { FlexboxComponent } from './flexbox/flexbox.component';




@NgModule({
  declarations: [
    ButtonsComponent,
    FlexboxComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    DemoRoutingModule
  ]
})
export class DemoModule { }
