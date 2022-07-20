import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/common/project';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css'],
})
export class ProjectEditComponent implements OnInit {
  projectEditForm: FormGroup | undefined;
  dbProject: any ;
  projectToUpdate: Project = new Project();
  projectForm: FormGroup ;
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
    this.projectService.getproject(this.pId).subscribe((data) => {
      this.dbProject = data;
      this.projectForm?.patchValue({
        name: this.dbProject.name,
        description: this.dbProject.description,
        category: this.dbProject.category,
        priority: this.dbProject.priority,
        project_id: this.dbProject.project_id,
      });
    });
  }

  updateProject() {
    this.projectToUpdate = this.projectForm?.value;
    this.projectService
      .updateProject(this.pId, this.projectToUpdate)
      .subscribe((data) => {
        console.log('project updated succefuly ');
        console.log(this.projectToUpdate.priority);
      });

    this.formClose.emit();
    

  }

  
}
