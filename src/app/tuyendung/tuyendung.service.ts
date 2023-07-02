import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user.model';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TuyenDungService {
  dataChange = new Subject<User[]>();
  constructor(private http: HttpClient) {}
  fetchData() {
    this.http
      .get<DataRes>(
        'https://dev.api.hrm.unicloudgroup.com.vn/api/v1/recruitcandidate/GetCandidatePage?can_st=-1&filter=&offSet=0&pageSize=20&vacancyId=NULL'
      )
      .subscribe((res) => this.dataChange.next(res.data.dataList));
  }
}
//
interface DataRes {
  data: Data;
  error: string;
  message: string;
  status: string;
  statusCode: number;
}
interface Data {
  can_actions: any;
  dataList: User[];
  gridKey: string;
  gridType: number;
  gridflexs: any;
  messages: string;
  recordsFiltered: number;
  recordsTotal: number;
  valid: boolean;
}
