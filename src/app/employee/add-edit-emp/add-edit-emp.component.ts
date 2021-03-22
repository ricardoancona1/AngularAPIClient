import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() emp: any;
  numeroEmpleado: string;
  Nombre: string;
  Apellidos: string;
  Direccion: string;
  Telefono: string;
  CURP: string;
  RFC: string;
  FechaInicio: Date;
  Departamento: string

  tabs: any = [];

  ngOnInit(): void {
    this.loadDepartmentList();
  }

  loadDepartmentList() {
    this.service.getTabuladores().subscribe((data: any) => {
      this.tabs = data;

      this.numeroEmpleado = this.emp.numeroEmpleado;
      this.Nombre = this.emp.Nombre;
      this.Apellidos = this.emp.Apellidos;
      this.Direccion = this.emp.Direccion;
      this.Telefono = this.emp.Telefono;
      this.CURP = this.emp.CURP;
      this.RFC = this.emp.RFC;
      this.Departamento = this.emp.Departamento;

    });
  }

  addEmployee() {
    var val = {
      Nombre: this.Nombre,
      Apellidos: this.Apellidos,
      Direccion: this.Direccion,
      Telefono: this.Telefono,
      CURP: this.CURP,
      RFC: this.RFC,
      Departamento: this.Departamento

    };

    this.service.addEmployee(val).subscribe(res => {
      alert(res.toString());
    });
    this.loadDepartmentList();
  }

  updateEmployee() {
    var val = {
      numeroEmpleado: this.numeroEmpleado,
      Nombre: this.Nombre,
      Apellidos: this.Apellidos,
      Direccion: this.Direccion,
      Telefono: this.Telefono,
      CURP: this.CURP,
      RFC: this.RFC,
      Departamento: this.Departamento
    };;

    this.service.updateEmployee(val).subscribe(res => {
      alert(res.toString());
    });
  }




}

