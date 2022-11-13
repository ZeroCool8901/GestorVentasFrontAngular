import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/services/api.service';
import { ModalService } from 'src/app/services/modal.service';
import { ModaltemplateComponent } from '../modaltemplate/modaltemplate.component';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent implements OnInit {
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
    await this.service.getAll("Services").then((res)=>{
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
    this.displayedColumns.push("Acciones")
  }
  
  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
      
    }
  }

  openDialog() {
    this.modalservice.titulo="servicio"
    this.modalservice.accion.next("crear")
    this.dialog.open(ModaltemplateComponent,{
      width: 'auto',
      height: 'auto'
    });
  }

  openDialogEdit(element: any) {
    this.modalservice.titulo="servicio"
    this.modalservice.accion.next("editar")
    this.modalservice.servicio = element
    this.dialog.open(ModaltemplateComponent,{
      width: 'auto',
      height: 'auto'
    });
  }

  delete(element: any){
    const id = element.idService
    this.service.Delete("Services", id)
    window.location.reload()
  }

}
