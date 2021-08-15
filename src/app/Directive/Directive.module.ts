import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Baitap6Component } from './Baitap6.componet';

import { DirectiveComponent } from './Directive.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  exports: [DirectiveComponent],
  declarations: [DirectiveComponent, Baitap6Component],
})
export class DirectiveModule {}
