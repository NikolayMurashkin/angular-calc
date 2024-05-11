import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyCalculatorComponent } from './my-calculator/my-calculator.component';
import { MyNavigationComponent } from './components/navigation/navigation.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PostService } from './components/requests/services/post.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyCalculatorComponent, MyNavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [HttpClient, HttpClientModule, PostService],
})
export class AppComponent {}
