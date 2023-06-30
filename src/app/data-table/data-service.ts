import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';
import { UserModel } from './user-model';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {
  datachange = new Subject<UserModel[]>();
  data: UserModel[] = [];
  header = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjM1OTcwRkNDOTZBRDhENDU2MDg0RDZFQzU1NTQ1Nzc0MUVDMTc0NzMiLCJ0eXAiOiJhdCtqd3QiLCJ4NXQiOiJOWmNQekphdGpVVmdoTmJzVlZSWGRCN0JkSE0ifQ.eyJuYmYiOjE2ODgxMTc0MDAsImV4cCI6MTY4ODExNzc2MCwiaXNzIjoiaHR0cHM6Ly9kZXYtYXV0aC51bmljbG91ZGdyb3VwLmNvbS52biIsImF1ZCI6WyJhcGlfc3JlIiwiYXBpX2hvbWVfc2VydmljZSIsImFwaV9jb3JlX2JpZ3RlYyIsImFwaV9ocm1fYmlndGVjIl0sImNsaWVudF9pZCI6IndlYl9zX2hybV9kZXYiLCJzdWIiOiI4MTczOWM1Yy0yY2EwLTRlMGYtYWNhYi02MzM3M2VhOGEzNGEiLCJhdXRoX3RpbWUiOjE2ODgwOTE5NjMsImlkcCI6ImxvY2FsIiwicm9sZSI6WyJyb2xfY2FiX2RyaXZlciIsInJvbF9ob21lX21hbmFnZXIiLCJyb2xfc3JlX3NhbGVyIiwicm9sX2FkbWluIiwicm9sX2hybV9hbGwiLCJyb2xfdXNyX21hbmFnZXIiLCJyb2xfaW52X2FkbWluIiwicm9sX3NyZV9tYW5hZ2VyIiwicm9sX2hybV9jYXJkIiwicm9sX2N1c3RfbWFuYWdlciIsInJvbF9ocm1fbWFuYWdlciIsInJvbF9jcm1fbWFuYWdlciIsInJvbF9pbnZfbWFuYWdlciIsInJvbF9jYWJfdXNlciIsInJvbF9jdXN0b21lciIsInJvbF9zcGtfbWFuYWdlciIsInJvbF9zcmVfdXNlciJdLCJwZXJtaXNzaW9uIjpbImNsbV9jYWJfZHJpdmVyIiwiY2xtX2hvbV9tYW5hZ2VyIiwiY2xtX3NyZV9zYWxlciIsImZ1bGxfYWNjZXNzIiwic21zX2FjY2VzcyIsImpvYl9hY2Nlc3MiLCJjdXN0b21lcl9hY2Nlc3MiLCJjaGF0X2FjY2VzcyIsImNoYXRfYWRtaW4iLCJjbG1fdmlzX3NhbGVyIiwiY2xtX3Zpc19tYW5hZ2VyIiwiY2xtX3Zpc19hZG1pbiIsImNsbV9ob21fdXNlciIsImNsbV9ob21fYWRtaW4iLCJjbG1fY2FiX3VzZXIiLCJjbG1fY2FiX21hbmFnZXIiLCJjbG1fcGF5X3VzZXIiLCJjbG1fcGF5X21hbmFnZXIiLCJjbG1fc3BrX21hbmFnZXIiLCJjbG1fdXNyX21hbmFnZXIiLCJjbG1faHJtX21hbmFnZXIiLCJjbG1fcmVzX21hbmFnZXIiLCJjbG1fcmVzX2ludmVzdG9yIiwiY2xtX3Jlc191c2VyIiwiY2xtX2N1c3RfdXNlciIsImNsbV9jdXN0X21hbmFnZXIiLCJjbG1fc3JlX3VzZXIiLCJjbG1fc3JlX21hbmFnZXIiLCJjbG1faW52X3VzZXIiLCJjbG1faW52X21hbmFnZXIiLCJjbG1faW52X2FkbWluIiwiY2xtX2hybV9jYXJkIiwiY2xtX2hybV9zYWxhcnkiLCJjbG1fc3N0dl91c2VyIiwiY2xtX3NzdHZfbWFuYWdlciIsImNsbV9zc3R2X2FkbWluIl0sIm5hbWUiOiJhZG1pbiIsInNjb3BlIjpbIm9wZW5pZCIsInByb2ZpbGUiLCJhcGlfc3JlIiwiYXBpX2hvbWVfc2VydmljZSIsImFwaV9jb3JlX2JpZ3RlYyIsImFwaV9ocm1fYmlndGVjIl0sImFtciI6WyJwd2QiXX0.c4ejdKZCZAp11yRkQ-6Q0J-bAC7ySv96ufgGffPxPFmexYsTK415wLx9-iAcpf8QHWpOadO41KYBdTe7oxQNZflzYvk_gqV7q2eYauNDGd7fk7qx5DBU0AZ_6ZcNX4z74VuAX5SRbZGclJsA-rwBbRPagR1kwZT3tBQaMC37e8xhTbrwvWiOIcMdXNASPDqwPQGA0_XpXLn31i3T0jY0mDAWQ4u3kUqc9GQ67wkIW33PdbsXyXJabt5zqZ286E9LnQFXZ5eHzjZj7XZxahm67kvooWf31HDXyHwZHPDpwWjADnGotEBpFTCj5SIND-opri7qa5LRytVHtLgpho2O2-_UE3ZAsXo28nxMbsqi9J-jhgs8JEmV5-G2qc1uSZ7Mb_wFwHYQz2S2q5gw8Ozn5KPj5hvuLcrCbBjl1iosNgYIJN3d9p6IA9jjwJPOrpilvi2ml193PwDWX7lLfrpkCCFuwwHjvY9S1dKNXrmutpR9ptEBSpH2IWW3wTNTYuHX`,
  });
  requestOptions = { headers: this.header };
  constructor(private http: HttpClient) {}
  fetchData() {
    return this.http
      .get<BaseResponse>(
        'https://dev.api.hrm.unicloudgroup.com.vn/api/v1/recruitcandidate/GetCandidatePage?can_st=-1&filter=&offSet=0&pageSize=20&vacancyId=NULL',
        this.requestOptions
      )
      .subscribe((res) => {
        console.log(res);
        this.data = res.data.dataList;
        this.datachange.next(this.data);
      });
  }
}

class BaseResponse {
  data!: ResponseData;
  error: any = null;
  status: string = '';
  statusCode: number = 0;
}

class ResponseData {
  can_actions: any[] = [];
  dataList: any[] = [];
  gridKey: string = '';
  gridType: number = 0;
}
