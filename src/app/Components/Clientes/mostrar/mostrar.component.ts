import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/Cliente.model';
import { ClientesService } from 'src/app/services/clientes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements OnInit {
  Clientes: Cliente[];
  constructor(private clienteService: ClientesService,
              private router: Router) { }

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe( (res) =>{
      this.Clientes = res;
    })
  }

  deleteRow = (id) => this.clienteService.deleteCliente(id.toString()).subscribe(data => window.location.reload()); 

}
