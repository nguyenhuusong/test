import { Component, Input, OnInit } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import {
  CellClickedEvent,
  ColDef,
  GridApi,
  GridReadyEvent,
} from 'ag-grid-community';
import { GridOptions } from 'ag-grid-community';

import { User } from 'src/app/tuyendung/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.css'],
})
export class AgGridComponent {
  @Input() ipDataUser!: User[];
  @Input() ipHeaderName!: string[];
  gridApi!: GridApi<any>;
  gridOptions = {};
  constructor(private http: HttpClient) {}
  onGridReady(params: GridReadyEvent<any>) {
    console.log(this.ipDataUser);

    this.gridApi = params.api;
    const colDefs: ColDef[] = [];
    const keys = Object.keys(this.ipDataUser[0]);
    keys.forEach((key, i) => {
      colDefs.push({ field: key, headerName: this.ipHeaderName[i] });
      this.gridApi.setRowData(this.ipDataUser);
      this.gridApi.setColumnDefs(colDefs);
    });
  }
}
