import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutes, MasterRoutingModule } from './master-routing.module';
import { PartyMasterComponent, partyMasterDialogComponent } from './party-master/party-master.component';
import { FirmMasterComponent, firmMasterDialogComponent } from './firm-master/firm-master.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { TablerIconsModule } from 'angular-tabler-icons';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MaterialModule } from 'src/app/material.module';
import { ProductMasterComponent, productMasterDialogComponent} from './product-master/product-master.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';
import { HttpClient } from '@angular/common/http';
import { SaleComponent, amountlistdialog, productdialog } from './sale/sale.component';
// import { AddSaleComponent } from './sale/add-sale/add-sale.component';
import { AddInvoiceComponent } from './sale/add-invoice/add-invoice.component';
import { PdfviewComponent } from './sale/add-invoice/pdfview/pdfview.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { ExpensesDialogComponent } from './expenses/expenses-dialog/expenses-dialog.component';
import { ExpensesmasterDialogComponent } from './expenses/expensesmaster-dialog/expensesmaster-dialog.component';


@NgModule({
  declarations: [
    PartyMasterComponent,
    FirmMasterComponent,
    partyMasterDialogComponent,
    firmMasterDialogComponent,
    ProductMasterComponent,
    productMasterDialogComponent,
    SaleComponent,
    // InvoiceListComponent,
    AddInvoiceComponent,
    PdfviewComponent,
    productdialog,
    amountlistdialog,
    SaleComponent,
    ExpensesComponent,
    ExpensesDialogComponent,
    ExpensesmasterDialogComponent
  ],
  imports: [
    CommonModule,
    MasterRoutingModule,
    RouterModule.forChild(MasterRoutes),
    MaterialModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    TablerIconsModule,
    MatNativeDateModule,
    NgApexchartsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
})
export class MasterModule { }
