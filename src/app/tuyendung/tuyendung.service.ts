import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class TuyenDungService {
  constructor(private http: HttpClient) {}
  fetchData() {
    return this.http.get(
      'https://dev.api.hrm.unicloudgroup.com.vn/api/v2/userrole/GetUserSalary?mainBoardId&processorId&systemId'
    );
  }
}
