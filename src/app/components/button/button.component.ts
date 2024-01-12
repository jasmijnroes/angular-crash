import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() text: string = '';
  @Input() color: string = '';
  @Output() btnClick = new EventEmitter()

  onClick() {
    this.btnClick.emit();
  }
  // Je kunt hier de informatie wat er moet gebeuren inzetten, maar is beter in een ander bestand zodat je deze button vaker kunt gebruiken. Daarom gebruiken we hier een eventemitter

}
