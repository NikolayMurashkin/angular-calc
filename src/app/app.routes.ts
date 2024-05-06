import { Routes } from '@angular/router';
import { MyCalculatorComponent } from './my-calculator/my-calculator.component';
import { NotFoundPage } from './components/notFoundPage/not-found-page.component';
import { DirectivesPageComponent } from './components/directives/directives.component';

export const routes: Routes = [
  {
    path: 'calculator',
    component: MyCalculatorComponent,
  },
  {
    path: '',
    redirectTo: 'calculator',
    pathMatch: 'full',
  },
  {
    path: 'object-list',
    loadChildren: () =>
      import('./components/objectList/object-list.module').then(
        (m) => m.ObjectListModule
      ),
  },
  {
    path: 'directives',
    component: DirectivesPageComponent,
  },
  {
    path: '**',
    component: NotFoundPage,
  },
];
