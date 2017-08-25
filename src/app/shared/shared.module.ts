import {
  MdInputModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdSliderModule,
  MdSidenavModule,
  MdListModule,
  MdGridListModule,
  MdProgressSpinnerModule,
  MdSnackBarModule,
  MdToolbarModule,
  MdIconModule,
  MdTooltipModule,
  MdMenuModule,
  MdSlideToggleModule,
  MdChipsModule,
  MdTabsModule, } from '@angular/material'
import { NgModule } from '@angular/core'
import 'hammerjs/hammer'
import { CommonModule } from '@angular/common'
import { FlexLayoutModule } from '@angular/flex-layout'

import { EditFieldComponent } from './edit-field/edit-field.component'

@NgModule({
  imports: [
    CommonModule,
    MdInputModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdSliderModule,
    MdSidenavModule,
    MdListModule,
    MdGridListModule,
    MdProgressSpinnerModule,
    MdSnackBarModule,
    MdToolbarModule,
    MdIconModule,
    MdTooltipModule,
    MdChipsModule,
    MdMenuModule,
    MdSlideToggleModule,
    FlexLayoutModule,
    MdTabsModule
  ],
  declarations: [ EditFieldComponent ],
  exports: [
    CommonModule,
    MdInputModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdSliderModule,
    MdSidenavModule,
    MdListModule,
    MdGridListModule,
    MdProgressSpinnerModule,
    MdSnackBarModule,
    MdToolbarModule,
    MdIconModule,
    MdTooltipModule,
    MdChipsModule,
    MdMenuModule,
    MdSlideToggleModule,
    FlexLayoutModule,
    EditFieldComponent,
    MdTabsModule
  ]
})
export class SharedModule {}
