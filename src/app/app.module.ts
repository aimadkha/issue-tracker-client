import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AddIssueComponent } from './component/project/add-issue/add-issue.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthInterceptor } from './helper/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ClarityModule } from '@clr/angular';
import { DashboardComponent } from './component/dashboard/dashboard/dashboard.component';
import { HomeComponent } from './component/home/home.component';
import { IssueListComponent } from './component/issue-list/issue-list.component';
import { IssueReportComponent } from './component/issue-report/issue-report.component';
import { LoginComponent } from './component/login/login.component';
import { NavbarComponent } from './component/dashboard/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { ProjectAddComponent } from './component/project/project-add/project-add.component';
import { ProjectEditComponent } from './component/project/project-edit/project-edit.component';
import { ProjectListComponent } from './component/project/project-list/project-list.component';
import { SidebarComponent } from './component/dashboard/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    IssueListComponent,
    IssueReportComponent,
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    ProjectListComponent,
    ProjectAddComponent,
    ProjectEditComponent,
    AddIssueComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
