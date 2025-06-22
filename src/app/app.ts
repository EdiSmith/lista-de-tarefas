import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hedear } from "./components/header/header";
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'listaDeTarefas';
}
