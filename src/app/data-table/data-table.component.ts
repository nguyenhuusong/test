import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { DataService } from './data-service';
import { UserModel } from './user-model';
import { getTest } from './dataTest';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})
export class DataTableComponent implements OnInit {
  data: UserModel[] = [];
  rowData = getTest();
  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.dataService.fetchData();
    this.dataService.datachange.subscribe((dataz) => {
      this.data = dataz;
    });
    console.log(this.rowData);
  }

  public columnDefs: ColDef[] = [
    { field: 'account_status' },
    { field: 'app_method' },
    { field: 'birthDay' },
  ];
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };
}
