import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCalculatorComponent } from './my-calculator.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [CommonModule, MyCalculatorComponent, FormsModule],
  exports: [MyCalculatorComponent],
  providers: [],
})
export class FeatureModule {}
