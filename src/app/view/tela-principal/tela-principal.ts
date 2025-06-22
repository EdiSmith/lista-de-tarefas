import { Component } from '@angular/core';
import { Hedear } from '../../components/header/header';
import { Tasks } from "../../components/tasks/tasks";


@Component({
  selector: 'app-tela-principal',
  imports: [Hedear, Tasks],
  templateUrl: './tela-principal.html',
  styleUrl: './tela-principal.scss'
})
export class TelaPrincipal {

}
