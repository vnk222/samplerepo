import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Person } from '../_models/index';
import {Users} from '../_models/index';


@Injectable()
export class CreateService{
    //private baseUrl: string = 'http://swapi.co/api/people';
  constructor(private http : HttpClient){
  }
  // other methods...
baseUrl:string ="https://jsonplaceholder.typicode.com/users";

  getUsers() {
      return this.http.get(this.baseUrl);
                      //  .map((response:Response) =>response.json())
                     // .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  getUserById(id:String){
      return this.http.get(this.baseUrl+"?id="+id);
  }

  
}