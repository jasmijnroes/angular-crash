import { Component, Input } from '@angular/core';
import { Task } from '../../Task';
// Deze moeten we erbij zetten omdat Task onze interface is
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task: Task = {"text": "test", "day": "test", "reminder": true, "id": 1};
  // maar dit werkt niet als er no sensible default value is voor task.

  // @Input() task!: Task;
  // Dit kan ook: verteld typescript dat hij moet ignoren dat het not initialized is in de contructor.

  faTimes = faTimes;
  // Zodat je het nu in je html kan gebruiken.
}