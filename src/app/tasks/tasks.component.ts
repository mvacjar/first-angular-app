import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from "./new-task/new-task.component";
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})

export class TasksComponent {
  @Input({required: true}) name!: string;
  @Input({required: true}) userId!: string;
  isCreatingTask = false;
private tasksService = inject(TasksService);

  get selectedUserTasks() {
  return  this.tasksService.getUserTasks(this.userId);
  }

  trackByTaskId( task: any): string {
    return task.id;
  }

  onAddTask() {
    this.isCreatingTask = true;
  }

  onCloseTask() {
    this.isCreatingTask = false;
  }

}
