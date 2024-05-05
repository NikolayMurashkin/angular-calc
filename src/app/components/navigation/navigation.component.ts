import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'my-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  imports: [RouterLink],
  standalone: true,
})
export class MyNavigationComponent {}
