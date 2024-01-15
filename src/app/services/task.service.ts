import { Injectable } from '@angular/core';
import {Task} from '../Task';
import {TASKS} from '../mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Task[] {
    return TASKS;
    // return an array of tasks
  }
  // We doen het op dezelfde manier als we deden in de component, alleen nu we want to call this getTasks from our component, instead of bringin it directly in.
}
