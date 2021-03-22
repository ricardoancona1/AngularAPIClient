import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.css']
})
export class AddEditDepComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() dep:any;
  DepartmentId:string;
  DepartmentName:string;
  TabDescription:string;
  TabSalary:string;
  ngOnInit(): void {
    this.DepartmentId=this.dep.TabDescription;
    this.DepartmentName=this.dep.TabSalary;
  }

  addDepartment(){
    var val = {Descripcion:this.TabDescription,
                SalarioQuincenal:this.TabSalary};
    this.service.postTabulador(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateDepartment(){
    var val = {DepartmentId:this.DepartmentId,
      DepartmentName:this.DepartmentName};
    this.service.updateDepartment(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}
