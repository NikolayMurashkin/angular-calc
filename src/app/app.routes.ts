import { Routes } from '@angular/router';
import { MyCalculatorComponent } from './my-calculator/my-calculator.component';
import { NotFoundPage } from './components/notFoundPage/not-found-page.component';
import { DirectivesPageComponent } from './components/directives/directives.component';
import { LifecircleComponent } from './components/lifecircle/lifecircle.component';
import { RequestsComponent } from './components/requests/requests.component';
import { PipesComponent } from './components/pipes/pipes/pipes.component';
import { FormsComponent } from './components/forms/forms.component';

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
    path: 'lifecircle',
    component: LifecircleComponent,
  },
  {
    path: 'requests',
    component: RequestsComponent,
  },
  {
    path: 'pipes',
    component: PipesComponent,
  },
  {
    path: 'forms',
    component: FormsComponent,
  },
  {
    path: 'pipes',
    component: PipesComponent,
  },
  {
    path: '**',
    component: NotFoundPage,
  },
];
