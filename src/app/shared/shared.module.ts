import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalDialogComponent } from './component/modal-dialog/modal-dialog.component';


const EXPORTED_DECLAREABLES = [ModalDialogComponent];
@NgModule({
  declarations: EXPORTED_DECLAREABLES,
  imports: [
    CommonModule
  ],
  exports: EXPORTED_DECLAREABLES
})
export class SharedModule { }
