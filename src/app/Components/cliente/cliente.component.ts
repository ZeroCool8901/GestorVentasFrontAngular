  import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalTemplateComponent } from '../modal-template/modal-template.component';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit{
  dataSource: MatTableDataSource<any>;
  constructor(public service:ApiService, public router: Router, public dialog: MatDialog, public modalservice:ModalService){
    this.dataSource = new MatTableDataSource()
  } /* - */
  public displayedColumns: string[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
 


  openDialog() {
    this.modalservice.titulo = "Cliente"
    this.dialog.open(ModalTemplateComponent,{
      width: 'auto',
      height: 'auto'
    })
  }

  ngOnInit(): void{
  this.get();
  }

  loadTable(data:any[]){
    this.displayedColumns=[];
    for (let column in data[0]) {
      this.displayedColumns.push(column)    
    }
  }
  
  
  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
      
    }
  }
  
  public async get(){
    await this.service.getAll("Clients").then((res)=>{
      for (let index = 0; index < res.length; index ++){
        this.loadTable([res[index]])
      }        
      this.dataSource.data = res;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;        
    })
  }
  
}






