import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjectListComponent } from './object-list.component';
import { RouterModule, Routes } from '@angular/router';
import { ObjectItemComponent } from './objectItem/object-item.component';

const routes: Routes = [
  {
    path: '',
    component: ObjectListComponent,
  },
  {
    path: ':id',
    component: ObjectItemComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ObjectListComponent, RouterModule.forChild(routes)],
  exports: [ObjectListComponent],
  providers: [],
})
export class ObjectListModule {}
