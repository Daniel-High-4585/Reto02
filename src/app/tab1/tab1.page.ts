import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Estudiante } from '../models/estudiante';
import { EstudianteService } from '../services/estudiante.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  public myForm: FormGroup;
  public student: Estudiante;
  constructor(private studentService: EstudianteService, private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', Validators.compose([Validators.minLength(3), Validators.maxLength(150)])],
      controlnumber: ['', Validators.pattern('[0-9]{10}$')],
      curp: ['',Validators.required],
      age: [0, Validators.required],
      active: [false, Validators.required]
    });
  }

  create(){
    this.student = {
      name: this.myForm.controls.name.value,
      controlnumber: this.myForm.controls.controlnumber.value,
      age: this.myForm.controls.age.value,
      curp: this.myForm.controls.curp.value,
      active: this.myForm.controls.active.value
    };
    this.studentService.createStudent(this.student);
  }
}
