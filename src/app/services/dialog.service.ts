import { Injectable } from '@angular/core';
import { TuiDialogService } from '@taiga-ui/core';
import { Component, Type } from '@angular/core';
import { TuiContextWithImplicit } from '@taiga-ui/cdk';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private dialogService: TuiDialogService) {}

  open<T, R = any>(component: Type<T>, data?: R, options?: any) {
    return this.dialogService.open(new TuiContextWithImplicit(component, data), {
      ...options,
      closeable: true,
    });
  }
}
