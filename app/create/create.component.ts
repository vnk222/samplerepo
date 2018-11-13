import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { CreateService } from '../_services/index';
import { Person } from '../_models/index';
import { Users } from '../_models/index';
import { Router } from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
    moduleId: module.id,
    templateUrl: 'create.component.html'

})
export class CreateComponent implements OnInit {
    model: any = {};
    person: Person[] = [];
    custname: string;
    usersDom: any = {};
    user: string;
    dom: any;
    users: Users[];
    rowData:any = [];
    constructor(private createService: CreateService, private router: Router) {

    }
     ngOnInit() {
    //     alert("nginti")
         this.createService.getUsers().subscribe(data => this.rowData = data);
     }
    search() {
        var id = this.model.custid;
        this.model.custname="";
        this.model.custemail="";
        //var name
        this.createService.getUserById(id).subscribe(p => this.usersDom = p);
       
        this.model.custname = this.usersDom[0].name;
        this.model.custemail = this.usersDom[0].email;
        
    }

    reset() {
        this.model.custname = "";
        this.model.custid = "";
        this.model.custemail = "";
    }

    columnDefs = [
        {headerName: 'ID', field: 'id',style:"width:100px"},
        {headerName: 'Name', field: 'name',editable: true},
        {headerName: 'Email', field: 'email'},
        {headerName: 'Phone', field: 'phone'}
    ];
    //rowData = this.usersDom;
    // rowData = [
    //     {make: 'Toyota', model: 'Celica', price: 35000},
    //     {make: 'Ford', model: 'Mondeo', price: 32000},
    //     {make: 'Porsche', model: 'Boxter', price: 72000}
    // ];
} 
