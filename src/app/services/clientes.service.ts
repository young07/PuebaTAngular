import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {Cliente} from '../models/Cliente.model';
import {url} from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'accept': 'text/plain',
    'Content-Type':' application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  constructor(private http: HttpClient) { }

  getClientes(){
    return this.http.get<Cliente[]>(url + "/Clientes/GetClientes");
  }

  getCliente(id: string)
  {
    return this.http.get<Cliente[]>(url + "/Clientes/GetClienteDetails/" + id);
  }

  addCliente(cliente: Cliente): Observable<Cliente>{
    console.log(cliente);
    return this.http.post<Cliente>(url + "/Clientes/SaveCliente", cliente, httpOptions);
  }

  updateCliente(id: string, cliente: Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(url + "/Clientes/UpdateCliente/"+id, cliente, httpOptions);
  }

  deleteCliente(id: string): Observable<any>{
    var data = url + "/Clientes/DeleteCliente/"+id;
    return this.http.delete<any>(data);
  }
}
