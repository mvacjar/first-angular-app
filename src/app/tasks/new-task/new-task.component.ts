import { Component, EventEmitter, inject, Output, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
    @Input({required: true}) userId!: string;
    @Output() closeTask = new EventEmitter<void>();
    @Output() createTask = new EventEmitter<NewTaskData>();
    enteredTitle = '';
    enteredSummary = '';
    enteredDate = '';;
    private tasksService = inject(TasksService);

    

onCancelTask() {
    this.closeTask.emit();
}

onSubmitTask() {
    this.tasksService.addTask({
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDate
        }, this.userId
    );
    this.closeTask.emit();
}}
    // this.createTask.emit({
    //     title: this.enteredTitle,
    //     summary: this.enteredSummary,
    //     date: this.enteredDate
    // });
// }
// }
   
