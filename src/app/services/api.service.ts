import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioLogin } from '../Components/ModelsView/UsuarioLoginMV.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }
  url = "https://localhost:7052/api/"

  async getAll(controller: string) {
    var DataResponse: any;
    await this.http.get(this.url + controller).toPromise().then((res) => {
      DataResponse = res;
    })
    return DataResponse;
  }

  async getById(controller: String, Id: String) {
    var DataResponse: any;
    await this.http.get(this.url + controller + "/" + Id).subscribe((res) => {
      DataResponse = res;
    })
    return DataResponse;
  }

  Post(controller: String, Body: any) {
    return this.http.post(this.url + controller, Body).subscribe((res) => {
      
    })
  }

  async Put(controller: String, Body: any, Id: string) {
    return await this.http.put(this.url + controller + "/" + Id, Body).toPromise().then((res) => {
      
    })
  }

  Delete(controller:String, Id:string){
    return this.http.delete(this.url + controller + "/" + Id).subscribe((res)=>{
      
    })
  }

public async login(controller:string, email:string, password:string){
  var DataResponse:UsuarioLogin;
  await this.http.get(this.url+controller + "/" + email + "/" + password).toPromise().then((res:UsuarioLogin)=>{
   
    DataResponse = res;
  })
  return DataResponse;
}

  deleteById(controller: string, id: number) {
    return this.http.delete(this.url + controller + "/" + id).subscribe((res) => {
 
    })
  }

  putById(controller: string, id: number, Body: any) {
    return this.http.post(Body, this.url +  controller + "/" + id).subscribe((res) => {
      
    })
  }
}
