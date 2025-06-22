import { Component, Input, input } from '@angular/core';
import { Tarefa } from '../../../Tarefa';
import{ faTimes } from "@fortawesome/free-solid-svg-icons"

@Component({
  selector: 'app-task-item',
  imports: [],
  templateUrl: './task-item.html',
  styleUrl: './task-item.scss'
})
export class TaskItem {
  @Input() tarefa!:Tarefa;
}
