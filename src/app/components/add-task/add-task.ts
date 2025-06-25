import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tarefa } from '../../../Tarefa';
import { Button } from '../button/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule, Button, CommonModule],
  templateUrl: './add-task.html',
  styleUrl: './add-task.scss'
})
export class AddTask {

  @Output() onAddTask = new EventEmitter<Tarefa>();

  tarefa: string = '';
  categoria: string = '';
  concluido: boolean = false;
  mostraraddTarefa:boolean = false;

  onSubmit(){
    if(!this.tarefa){
      alert("Adicione uma tarefa!")
      return
    }

    const novaTarefa = {

        tarefa: this.tarefa,
        categoria: this.categoria,
        concluido: this.concluido
    }

    this.onAddTask.emit(novaTarefa);

    this.tarefa= "";
    this.categoria= "";
    this.concluido= false;


  }

  AlteraVisualizacao(valor: boolean){
    this.mostraraddTarefa = valor;
  }


}
 