import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {MatDialogRef} from '@angular/material/dialog';
import {Agendamento} from '../agendamento/agendamento';
import {Barbeiro} from '../barbeiro';
import {BarbeiroService} from '../barbeiro.service';

import { debounceTime, tap, switchMap, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-novo-agendamento',
  templateUrl: './novo-agendamento.component.html',
  styleUrls: ['./novo-agendamento.component.css']
})
export class NovoAgendamentoComponent implements OnInit {

  public barbeiros: Barbeiro[];
  
  public dados = {
    agendamento: new Agendamento("",null,0,0)
  };

  searchClientsCtrl = new FormControl();
  filteredClients: any;
  isLoading = false;
  errorMsg: string;
  isOpen = false;
  date;

  constructor(
    private BarbeiroService: BarbeiroService,
    private http: HttpClient,
    public dialogref: MatDialogRef<NovoAgendamentoComponent>
  ) {}

  ngOnInit(): void {
    this.barbeiros = this.BarbeiroService.barbeiros;
    
    this.searchClientsCtrl.valueChanges
      .pipe(
        debounceTime(500),
        tap(() => {
          this.errorMsg = "";
          this.filteredClients = [];
          this.isLoading = true;
        }),
        switchMap(value => this.http.get("http://127.0.0.1:8000/api/clientes/"+value)
          .pipe(
            finalize(() => {
              this.isLoading = false
            }),
          )
        )
      )
      .subscribe(data => {
        this.filteredClients = data;
        /*if (data['Search'] == undefined) {
          this.errorMsg = data['Error'];
          this.filteredClients = [];
        } else {
          this.errorMsg = "";
          this.filteredClients = data['Search'];
        }
 
        console.log(this.filteredClients);*/
      });
    //console.log(this.barbeiros);
  }
  
  public onSetDate(newDate: Date) {
    this.isOpen = false;
    this.date = newDate;
    this.dados.agendamento.dataagendamento = newDate;
  }

  salvar() {
    this.dados.agendamento.empresa_id = 1;
    this.dados.agendamento.user_id = 1;
    this.dialogref.close(this.dados);
  }

  cancelar() {
    this.dialogref.close(null);
  }

  selecionarCliente(id) {
    if ( this.searchClientsCtrl.value != '' ) {
      this.dados.agendamento.cliente_id = id;
    }
  }

  limparIdCliente() {
    this.dados.agendamento.cliente_id = 0;
  }
}
