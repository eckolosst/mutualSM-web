import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  MatListModule,
  MatIconModule,
  MatDividerModule
} from '@angular/material';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';

const components = [SidebarComponent];

@NgModule({
  declarations: components,
  imports: [
    MatListModule,
    MatIconModule,
    MatDividerModule,
    CommonModule,
    RouterModule
  ],
  exports: components
})
export class SharedModule {}
