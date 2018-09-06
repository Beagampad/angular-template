import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup,  FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-misinvitaciones',
  templateUrl: './misinvitaciones.component.html',
  styleUrls: ['./misinvitaciones.component.css']
})
export class MisinvitacionesComponent implements OnInit {

  angForm: FormGroup;

    constructor() {

    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {

    this.angForm = new FormGroup({
      disscuss: new FormControl(),
   });
  }
}
