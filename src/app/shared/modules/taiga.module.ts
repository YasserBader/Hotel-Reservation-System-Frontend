import { NgModule } from '@angular/core';
import {
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TuiButtonModule,
  TuiLinkModule,
  TuiTextfieldControllerModule,
  TuiDataListModule,
} from '@taiga-ui/core';
import {
  TuiPaginationModule,
  TuiTableModule,
  TuiLoaderModule,
  TuiInputModule,
  TuiSelectModule,
  TuiCalendarModule,
  TuiProgressModule,
  TuiTabsModule,
  TuiFieldErrorPipeModule,
  TuiScrollbarModule,
  TuiCheckboxModule,
} from '@taiga-ui/kit';
@NgModule({
  exports: [
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    TuiButtonModule,
    TuiPaginationModule,
    TuiTableModule,
    TuiLoaderModule,
    TuiLinkModule,
    TuiInputModule,
    TuiTextfieldControllerModule,
    TuiSelectModule,
    TuiCalendarModule,
    TuiDataListModule,
    TuiProgressModule,
    TuiTabsModule,
    TuiFieldErrorPipeModule,
    TuiScrollbarModule,
    TuiCheckboxModule,
  ],
})
export class TaigaModule {}
