import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpEvent } from '@angular/common/http'
import { Agendamento } from './agendamento/agendamento';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  public agendamentos: Agendamento[] = [];

  constructor(private http: HttpClient) {
    /*this.http.get("/api/agendamentos").subscribe(
      (agendamentos: any[]) => {
        for(let a of agendamentos) {
          this.agendamentos.push(
            new Agendamento(a.id
              ,a.titulo
              ,a.subtitulo
              ,a.email
              ,a.mensagem
              ,a.arquivo
              ,a.id
              ,a.likes
              )
          );
        }
      }
    );*/
  }

  salvar(agendamento: Agendamento) {
  }
}
