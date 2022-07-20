import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { Issue } from 'src/app/common/issue';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-add-issue',
  templateUrl: './add-issue.component.html',
  styleUrls: ['./add-issue.component.css'],
})
export class AddIssueComponent implements OnInit {
  issueForm: FormGroup | undefined;
  projectForm: FormGroup;
  issue: Issue = new Issue();
  dbProject: any ;
  pId: any;
  @Output() formClose = new EventEmitter();

  constructor(
    private builder: FormBuilder,
    private projectService: ProjectService,
    private route: ActivatedRoute
  ) {
    this.projectForm = this.builder.group({
      name: '',
      description: '',
      category: '',
      priority: '',
      project_id: '',
    });
  }

  ngOnInit(): void {
    this.pId = this.route.snapshot.paramMap.get('id');
    this.projectService.getproject(this.pId).subscribe(
      (data) => {
        this.dbProject = data;
        this.projectForm.patchValue({
          name: this.dbProject.name,
          description: this.dbProject.description,
          category: this.dbProject.category,
          priority: this.dbProject.priority,
          project_id: this.dbProject.project_id,
        });
      })
    this.issueForm = this.builder.group({
      title: ['', Validators.required],
      description: [''],
      priority: ['', Validators.required],
      type: ['', Validators.required],
    });
  }

  addIssueToProject() {
    this.issue = this.issueForm?.value;
    this.projectService.addIssueToProject(this.pId, this.issue).subscribe(
      (data) => {
        console.log("issue added succefuly");
      }
    );
    this.formClose.emit();
  }

  
}
