import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ClarityModule } from '@clr/angular';
import { HomeComponent } from './component/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { IssueListComponent } from './component/issue-list/issue-list.component';
import { IssueReportComponent } from './component/issue-report/issue-report.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './component/dashboard/navbar/navbar.component';
import { SidebarComponent } from './component/dashboard/sidebar/sidebar.component';
import { DashboardComponent } from './component/dashboard/dashboard/dashboard.component';
import { ProjectListComponent } from './component/project/project-list/project-list.component';
import { ProjectAddComponent } from './component/project/project-add/project-add.component';
import { ProjectEditComponent } from './component/project/project-edit/project-edit.component';
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
    ProjectEditComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
