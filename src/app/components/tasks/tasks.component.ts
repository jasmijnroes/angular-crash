import { Component } from '@angular/core';
import {Task} from '../../Task';
import {TASKS} from '../../mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  tasks: Task[] = TASKS;
  // assign as a property of our component
  // de Task[] is de type. we assignen TASKS directly.
}
