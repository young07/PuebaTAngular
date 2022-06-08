import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes.service';
import { FormArray, FormBuilder, FormGroup} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Cliente, Contacto } from 'src/app/models/Cliente.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  public clienteForm: FormGroup;
  myDate = new Date();
  numero: FormArray;
  values = [];
  constructor(public clienteServices: ClientesService,
              public formBuilder: FormBuilder,
              public router: Router) {
                this.clienteForm = this.formBuilder.group({
                  Nombre : [''],
                  Apellido : [''],
                  Fecha_Nacimiento : [''],
                  Genero : [''],
                  Email : [''],
                  Contactos: this.formBuilder.array([])
                })
               }

  ngOnInit(): void {
  }

  createItem(item = 0): FormGroup {
    return this.formBuilder.group({
      Numero: item
    });
    
  }

  get contactos() : FormArray {
    return this.clienteForm.get("Contactos") as FormArray;
  }

  newContacto(): FormGroup {
    return this.formBuilder.group({
      numero: '',
    })
  }

  addItem(){
    this.contactos.push(this.newContacto());
  }

  removevalue(i){
    this.contactos.removeAt(i)
  }

  onSubmit(){
    this.clienteServices.addCliente(this.clienteForm.value).subscribe(data => this.router.navigate(['']));
  }
}
