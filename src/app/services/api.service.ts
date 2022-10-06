import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

  Put(controller: String, Body: any, Id: String) {
    return this.http.put(Body, this.url + controller).subscribe((res) => {
      
    })
  }

  async Delete(controller:String, Id:String){
    return this.http.delete(this.url + controller + "/" + Id).subscribe((res)=>{
      
    })
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
