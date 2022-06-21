import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { DashboardComponent } from './component/dashboard/dashboard/dashboard.component';
import { HomeComponent } from './component/home/home.component';
import { IssueListComponent } from './component/issue-list/issue-list.component';
import { NgModule } from '@angular/core';
import { ProjectListComponent } from './component/project/project-list/project-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'issue', component: IssueListComponent },
      { path: 'project', component: ProjectListComponent },
    ],
  },
  { path: 'issue', component: IssueListComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
  
})
export class AppRoutingModule { }
