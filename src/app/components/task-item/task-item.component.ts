import { Component, Input } from '@angular/core';
import {Task} from '../../Task'
// Deze moeten we erbij zetten omdat Task onze interface is

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() task?: Task;
  // In de tutorial geen vraagteken, en wel =string erachter, maar dan werkte het bij mij niet.
}
