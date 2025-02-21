import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MultipleConversionPageRoutingModule } from './multiple-conversion-routing.module';

import { MultipleConversionPage } from './multiple-conversion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MultipleConversionPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [MultipleConversionPage]
})
export class MultipleConversionPageModule {}
