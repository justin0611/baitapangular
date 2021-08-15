import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Baitap5Component } from './Baitap5.component';
import { DirectiveComponent } from './Directive.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [DirectiveComponent],
  declarations: [DirectiveComponent, Baitap5Component],
})
export class DirectiveModule {}
