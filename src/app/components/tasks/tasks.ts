import { Component, NgModule, OnInit } from '@angular/core';
import { Task } from '../../services/task';
import { Tarefa } from '../../../Tarefa';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaskItem } from "../../component/task-item/task-item";
import { AddTask } from '../add-task/add-task';

@Component({
  selector: 'app-tasks',
  imports: [CommonModule, TaskItem, AddTask],
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

  deleteTask(tarefa:Tarefa){
    this.taskService.deleteTask(tarefa).subscribe(()=>
      (this.tarefas =this.tarefas.filter((t)=> tarefa.id !== tarefa.id)));
  }

  taggleConcluido(tarefa: Tarefa){
    tarefa.concluido = !tarefa.concluido;
    this.taskService.updateTask(tarefa).subscribe();
  }

  AddTask(tarefa: Tarefa){
    this.taskService.addTask(tarefa).subscribe(()=>{
      this.tarefas.push(tarefa);

    })
  }
}
