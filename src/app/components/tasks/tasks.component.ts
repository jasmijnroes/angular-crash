import { Component } from '@angular/core';
import {TaskService} from '../../services/task.service';

import {Task} from '../../Task';
// import {TASKS} from '../../mock-tasks';

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
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
    // We call the getTasks method from the service.
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => (this.tasks = this.tasks.filter((t) => t.id !== task.id)));
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    // je zet m naar het tegenovergestelde van wat het was.

    this.taskService.updateTaskReminder(task).subscribe();
    // je moet het eerst in task.service.ts zetten, anders wordt het niet geupdate naar de database.
    
  }
}
