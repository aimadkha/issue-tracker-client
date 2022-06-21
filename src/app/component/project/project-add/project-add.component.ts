import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Project } from './../../../common/project';
import { ProjectService } from './../../../service/project.service';

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css']
})
export class ProjectAddComponent implements OnInit {
  projectForm: FormGroup ;
  project: Project = new Project();
  @Output() formClose = new EventEmitter();

  constructor(
    private builder: FormBuilder,
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
    this.projectForm = this.builder.group({
      name: ['', Validators.required],
      description: [''],
      category: ['', Validators.required],
      priority: ['', Validators.required],
    });
  }

  addProject() {
    if (this.projectForm && this.projectForm.invalid) {
      this.projectForm.markAllAsTouched();
      return;
    }

    this.projectService.createProject(this.projectForm?.value).subscribe({
      next: (data) => {
        console.log(data);
      }
    });

    this.formClose.emit();

    
  }

}
