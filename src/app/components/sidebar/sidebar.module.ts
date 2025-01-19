import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { RouterModule } from '@angular/router';
import { TuiLinkModule } from '@taiga-ui/core';

@NgModule({
  declarations: [SidebarComponent],
  imports: [CommonModule, RouterModule, TuiLinkModule],
  exports: [SidebarComponent],
})
export class SidebarModule {}
