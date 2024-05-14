import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  constructor(){}

  public form = new FormGroup({
    nombre: new FormControl("", Validators.required),
    apellido: new FormControl("", Validators.required),
    edad: new FormControl("", Validators.required),
  });

}
