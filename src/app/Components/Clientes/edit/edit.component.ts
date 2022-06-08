import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { FormArray, FormBuilder, FormGroup} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public editForm: FormGroup;
  ClienteRef: any;
  constructor(public clienteServices: ClientesService,
    public formBuilder: FormBuilder,
    private router: Router,
    private activeRouter: ActivatedRoute) {
      this.editForm = this.formBuilder.group({
        Nombre : [''],
        Apellido : [''],
        Fecha_Nacimiento : [''],
        Genero : [''],
        Email : [''],
        Contactos: this.formBuilder.array([])
      })
     }

  ngOnInit(): void {
    const id = this.activeRouter.snapshot.paramMap.get('id');
    this.clienteServices.getCliente(id).subscribe(res =>{
      this.ClienteRef = res;
      console.log(this.ClienteRef);
      this.editForm = this.formBuilder.group({
        id :  id,  
        Nombre : [this.ClienteRef.nombre],
        Apellido : [this.ClienteRef.apellido],
        Fecha_Nacimiento : [this.ClienteRef.fecha_Nacimiento],
        Genero : [this.ClienteRef.genero],
        Email : [this.ClienteRef.email],
        Contactos: this.formBuilder.array([this.ClienteRef.contactos])
      })
    })
  }

  onSubmit(){
    const id = this.activeRouter.snapshot.paramMap.get('id');
    this.clienteServices.updateCliente(id,this.editForm.value).subscribe(data => this.router.navigate(['']));
  }

  createItem(item = 0): FormGroup {
    return this.formBuilder.group({
      Numero: item
    });
  }

  addItem(item): void {
    //this.numero = this.clienteForm.get('Contactos') as FormArray;
    //this.numero.push(item);
  }

}
