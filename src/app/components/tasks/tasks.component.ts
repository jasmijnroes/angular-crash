import { Component } from '@angular/core';
import {TaskService} from '../../services/task.service';

// import {Task} from '../../Task';
import {TASKS} from '../../mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  tasks: Task[] = [];
  // assign as a property of our component
  // de Task[] is de type. we assignen TASKS directly.

  // We hebben TASKS niet meer nodig omdat we nu de service gebruiken, dus veranderd naar een lega array.

  constructor(private taskService: TaskService) { }
  // We hebben de service nodig, en deze moet in de constructor komen.

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
    // We call the getTasks method from the service.
  }
}
