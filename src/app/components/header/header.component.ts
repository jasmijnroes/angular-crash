import { Component, OnDestroy } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnDestroy {
  title: string = 'Task tracker';
  showAddTask: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => this.showAddTask = value);
    // In de tutorial is deze constructor leeg, maar omdat ik een nieuwere versie van angualr gebruik, moet ik deze code toevoegen.
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  // Ook ngondestroy is niet vanuit de tutorial.


  toggleAddTask() {
    this.uiService.toggleAddTask();
  }
}
