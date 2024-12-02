import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task/task.component';
import { DUMMY_TASKS } from './task/dummy-tasks';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})

export class TasksComponent {
  @Input({required: true}) name!: string;
  @Input({required: true}) userId!: string;
  tasks = DUMMY_TASKS;
  

  get selectedUserTasks() {
return this.tasks.filter((task) => task.userId === this.userId); 
  }

  trackByTaskId( task: any): string {
    return task.id;
  }
}
