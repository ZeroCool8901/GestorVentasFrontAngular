import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/services/api.service';
import { ModaltemplateComponent } from '../modaltemplate/modaltemplate.component';
import { ModalService } from 'src/app/services/modal.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-contratista',
  templateUrl: './contratista.component.html',
  styleUrls: ['./contratista.component.css']
})
export class ContratistaComponent implements OnInit {
  dataSource: MatTableDataSource<any>;
  
  constructor(public service:ApiService, public dialog: MatDialog, public modalservice: ModalService) {
    this.dataSource = new MatTableDataSource()
   }

   public displayedColumns: string[];

   @ViewChild(MatPaginator) paginator: MatPaginator;
   @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.get();
  }

  public async get(){
    await this.service.getAll("Contractors").then((res)=>{
      for (let index = 0; index < res.length; index ++){
        this.loadTable([res[index]])
      }        
      this.dataSource.data = res;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;        
    })
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

  openDialog() {
    this.modalservice.titulo="contratista"
    this.modalservice.accion.next("crear")
    this.dialog.open(ModaltemplateComponent,{
      width: 'auto',
      height: 'auto'
    }); 
  }
  
  openDialogEdit(element: any) {
    this.modalservice.titulo="cliente"
    this.modalservice.accion.next("editar")
    this.modalservice.cliente = element
    this.dialog.open(ModaltemplateComponent,{
      width: 'auto',
      height: 'auto'
    });
  }

  delete(element: any){
    const id = element.idClient
    this.service.Delete("Contractors", id)
    window.location.reload()
  }

}
