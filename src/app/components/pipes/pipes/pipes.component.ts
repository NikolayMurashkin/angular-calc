import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MyCustomPipe } from './pipe/my-custom.pipe';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CommonModule, MyCustomPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss',
})
export class PipesComponent {
  // DatePipe
  // UpperCase
  // LowerCase
  // DecimalPipe
  // CurrencyPipe
  // PercentPipe

  public name = 'dazhe i ne starayus';
  public surname = 'DEVELoper';

  public date = new Date().toDateString();
}
