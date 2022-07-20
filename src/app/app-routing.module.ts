import { RouterModule, Routes } from '@angular/router';

import { AddIssueComponent } from './component/project/add-issue/add-issue.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './component/dashboard/dashboard/dashboard.component';
import { HomeComponent } from './component/home/home.component';
import { IssueListComponent } from './component/issue-list/issue-list.component';
import { LoginComponent } from './component/login/login.component';
import { NgModule } from '@angular/core';
import { ProjectEditComponent } from './component/project/project-edit/project-edit.component';
import { ProjectListComponent } from './component/project/project-list/project-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    canActivate: [AuthGuardGuard],
    canActivateChild: [AuthGuardGuard],

    component: DashboardComponent,
    children: [
      { path: 'issue', component: IssueListComponent },
      { path: 'project', component: ProjectListComponent },
      { path: 'project/:id', component: ProjectEditComponent },
      { path: 'project/issue/:id', component: AddIssueComponent },
    ],
  },
  { path: 'issue', component: IssueListComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
