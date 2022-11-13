import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/services/api.service';
import { ModalService } from 'src/app/services/modal.service';
import { ModaltemplateComponent } from '../modaltemplate/modaltemplate.component';

@Component({
  selector: 'app-artefacto',
  templateUrl: './artefacto.component.html',
  styleUrls: ['./artefacto.component.css']
})
export class ArtefactoComponent implements OnInit {
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
    await this.service.getAll("Articles").then((res)=>{
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
    this.modalservice.titulo="artefacto"
    this.modalservice.accion.next("crear")
    this.dialog.open(ModaltemplateComponent,{
      width: 'auto',
      height: 'auto'
    });
  }

  openDialogEdit(element: any) {
    this.modalservice.titulo="artefacto"
    this.modalservice.accion.next("editar")
    this.modalservice.articulo = element
    this.dialog.open(ModaltemplateComponent,{
      width: 'auto',
      height: 'auto'
    });
  }

  delete(element: any){
    const id = element.idArticle
    this.service.Delete("Articles", id)
    window.location.reload()
  }

}
