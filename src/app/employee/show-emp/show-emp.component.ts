import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {

  constructor(private service:SharedService) { }
  DepartamentoBuscado:string;
  EmployeeList:any=[];
  hasSearched:boolean=false;
  ModalTitle:string;
  ActivateAddEditEmpComp:boolean=false;
  emp:any;
  EmployeeDepList:any=[];

  ngOnInit(): void {
    this.refreshEmpList();
  }

  addClick(){
    this.emp={
      EmployeeID:0,
      EmployeName:"",
      Department:"",
      DateOfJoining:"",
      PhotoFileName:"anonymous.png"
    }
    this.ModalTitle="Agregar Empleado";
    this.ActivateAddEditEmpComp=true;

  }
  buscarDepto(DepartamentoBuscado){
    this.hasSearched=true;
    this.service.getDepartamentos(DepartamentoBuscado).subscribe((data: any) => {
      this.EmployeeDepList = data;


    });
  }
  editClick(item){

    this.emp=item;
    this.ModalTitle="Editar Empleado";
    this.ActivateAddEditEmpComp=true;
  }

  deleteClick(item){
    if(confirm('Estas seguro?')){
      this.service.deleteEmployee(item.numeroEmpleado).subscribe(data=>{
        alert(data.toString());
        this.refreshEmpList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditEmpComp=false;
    this.refreshEmpList();
  }


  refreshEmpList(){
    this.service.getEmpList().subscribe(data=>{
      this.EmployeeList=data;
    });
  }

}

