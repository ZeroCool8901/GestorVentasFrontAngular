import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { MenuComponent } from './Components/menu/menu.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { TableComponent } from './Components/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { ClienteComponent } from './Components/cliente/cliente.component';
import { FormClientComponent } from './Components/forms/form-client/form-client.component';
import { LoginComponent } from './Components/login/login.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ArtefactoComponent } from './Components/artefacto/artefacto.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContratistaComponent } from './Components/contratista/contratista.component';
import { CuentaBancariaComponent } from './Components/cuenta-bancaria/cuenta-bancaria.component';
import { VentaComponent } from './Components/venta/venta.component';
import { ServicioComponent } from './Components/servicio/servicio.component';
import { UsuarioComponent } from './Components/usuario/usuario.component';
import { ModaltemplateComponent } from './Components/modaltemplate/modaltemplate.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FormArticleComponent } from './Components/forms/form-article/form-article.component';
import { FormContractorComponent } from './Components/forms/form-contractor/form-contractor.component';
import { FormBankAccountComponent } from './Components/forms/form-bank-account/form-bank-account.component';
import { FormSaleComponent } from './Components/forms/form-sale/form-sale.component';
import { FormServiceComponent } from './Components/forms/form-service/form-service.component';
import { FormUserComponent } from './Components/forms/form-user/form-user.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DashboardComponent,
    TableComponent,
    ClienteComponent,
    FormClientComponent,
    LoginComponent,
    ArtefactoComponent,
    ContratistaComponent,
    CuentaBancariaComponent,
    VentaComponent,
    ServicioComponent,
    UsuarioComponent,
    ModaltemplateComponent,
    FormArticleComponent,
    FormContractorComponent,
    FormBankAccountComponent,
    FormSaleComponent,
    FormServiceComponent,
    FormUserComponent
    
  ],
  imports: [
    MatDialogModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
