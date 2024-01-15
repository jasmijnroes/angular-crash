import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs'
import {Task} from '../Task';
import {TASKS} from '../mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Observable<Task[]> {
    const tasks = of(TASKS);
    return tasks;
  }
  // We doen het op dezelfde manier als we deden in de component, alleen nu we want to call this getTasks from our component, instead of bringin it directly in.
}
