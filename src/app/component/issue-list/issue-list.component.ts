import { Component, OnInit } from '@angular/core';

import { Issue } from './../../common/issue';
import { IssuesService } from 'src/app/service/issues.service';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css'],
})
export class IssueListComponent implements OnInit {
  issues: any = [];
  showReportIssue = false;

  constructor(private issueService: IssuesService) {}

  ngOnInit(): void {
    this.getIssues();
  }

  private getIssues() {
    console.log("inside method lists of issues");
    this.issueService.getAllIssue().subscribe(data => {
      this.issues = data;
    })
  }

  onCloseReport() {
    this.showReportIssue = false;
    this.getIssues();
  }
}
