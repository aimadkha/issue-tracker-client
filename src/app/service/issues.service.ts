import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Issue } from './../common/issue';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class IssuesService {
  private baseUrl = 'http://localhost:8080/track/api/issue';

  private issues: Issue[] = [];

  constructor(private http: HttpClient) {}

  getPendingIssues(): Issue[] {
    return this.issues.filter((issue) => !issue.completed);
  }

  createIssue(issue: Issue): Observable<any> {
    console.log('inside service ' + issue);
    return this.http.post(this.baseUrl, issue, httpOptions);
    // issue.issueNo = this.issues.length + 1;
    // this.issues.push(issue);
  }

  getAllIssue(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
}
