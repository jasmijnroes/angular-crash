import { Component, Input  } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() text: string = '';
  @Input() color: string = '';

  onClick() {
    console.log("add");
  }
  // Je kunt hier de informatie wat er moet gebeuren inzetten, maar is beter in een ander bestand zodat je deze button vaker kunt gebruiken.

}
