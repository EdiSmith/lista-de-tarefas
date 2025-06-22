import { Component, NgModule, OnInit } from '@angular/core';
import { Task } from '../../services/task';
import { Tarefa } from '../../../Tarefa';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaskItem } from "../../component/task-item/task-item";

@Component({
  selector: 'app-tasks',
  imports: [CommonModule, TaskItem],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss'
})
export class Tasks implements OnInit {


    tarefas: Tarefa[] = [];
  constructor(private taskService: Task){}

  ngOnInit(): void {

    this.taskService.getTasks().subscribe((dado)=>{
        this.tarefas = dado;
        console.log(dado);
    })
    
    
  }

}
