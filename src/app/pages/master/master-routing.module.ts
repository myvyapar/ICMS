import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartyMasterComponent } from './party-master/party-master.component';
import { FirmMasterComponent } from './firm-master/firm-master.component';
import { FullComponent } from 'src/app/layouts/full/full.component';
import { ProductMasterComponent } from './product-master/product-master.component';
import { SaleComponent } from './sale/sale.component';
import { AddInvoiceComponent } from './sale/add-invoice/add-invoice.component';
import { PdfviewComponent } from './sale/add-invoice/pdfview/pdfview.component';
import { ExpensesComponent } from './expenses/expenses.component';


export const MasterRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: 'partymaster',
        component: PartyMasterComponent,
        data: {
          title: 'Party Master',
          urls: [
            { title: 'Master', url: '/master/partymaster' },
            { title: 'Party Master' },
          ],
        },
      },
      {
        path: 'firmmaster',
        component: FirmMasterComponent,
        data: {
          title: 'Firm Master',
          urls: [
            { title: 'Master', url: '/master/firmmaster' },
            { title: 'Firm Master' },
          ],
        },
      },
      {
        path: 'productmaster',
        component: ProductMasterComponent,
        data: {
          title: 'Product Master',
          urls: [
            { title: 'Master', url: '/master/productmaster' },
            { title: 'Product Master' },
          ],
        },
      },
      {
        path: 'sale',
        component: SaleComponent,
        data: {
          title: 'Sale',
          urls: [
            { title: 'Master', url: '/master/sale' },
            { title: 'Sale' },
          ],
        },
      },
      {
        path: 'invoiceview',
        component: PdfviewComponent,
        data: {
          title: 'Invoice View',
          urls: [
            { title: 'Master', url: '/master/invoicelist' },
            { title: 'Invoice View' },
          ],
        },
      },
      {
        path: 'addinvoice',
        component: AddInvoiceComponent,
        data: {
          title: 'Add Invoice',
          urls: [
            { title: 'Master', url: '/master/addinvoice' },
            { title: 'Add Invoice' },
          ],
        },
      },
      {
        path: 'expenses',
        component: ExpensesComponent,
        data: {
          title: 'Expenses',
          urls: [
            { title: 'Master', url: '/master/expenses' },
            { title: 'Expenses' },
          ],
        },
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(MasterRoutes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
