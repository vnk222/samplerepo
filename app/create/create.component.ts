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

    constructor(private createService: CreateService, private router: Router) {

    }
    ngOnInit() {
        alert("nginti")
        //this.createService.getAll().subscribe(p=>  this.router.navigate(['login']));
        this.createService.getUsers().subscribe(data => this.usersDom = data);
    }
    search() {
        var id = this.model.custid;
        //var name
        this.createService.getUserById(id).subscribe(p => this.usersDom = p);
        var userList = this.usersDom.name;
        // userList=JSON.parse(JSON.stringify(userList));
        console.log("hinaveve");
        console.log("hinaveve" + userList);
    }

    reset() {
        this.model.custname = "";
        this.model.custid = "";
        this.model.custemail = "";
    }
} 
