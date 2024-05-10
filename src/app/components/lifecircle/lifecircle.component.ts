import { Component } from '@angular/core';
import { ParentComponent } from './parent/parent.component';

@Component({
  selector: 'app-lifecircle',
  standalone: true,
  imports: [ParentComponent],
  templateUrl: './lifecircle.component.html',
  styleUrl: './lifecircle.component.scss',
})
export class LifecircleComponent {}
