import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.scss'
})
export class Button {
  @Input() text: string = '';
  @Input() color: string = '';
  @Output() btnClick = new EventEmitter ();
  onClick(){
    this.btnClick.emit();
  }

}
