import {
  HttpHeaders,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (
      req.url === 'https://www.ag-grid.com/example-assets/row-data.json' ||
      req.url === 'https://www.ag-grid.com/example-assets/olympic-winners.json'
    ) {
      return next.handle(req);
    }
    const modifiedRequest = req.clone({
      headers: new HttpHeaders({
        Authorization:
          'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjM1OTcwRkNDOTZBRDhENDU2MDg0RDZFQzU1NTQ1Nzc0MUVDMTc0NzMiLCJ0eXAiOiJhdCtqd3QiLCJ4NXQiOiJOWmNQekphdGpVVmdoTmJzVlZSWGRCN0JkSE0ifQ.eyJuYmYiOjE2ODgzMDUyMDUsImV4cCI6MTY4ODMwODgwNSwiaXNzIjoiaHR0cHM6Ly9kZXYtYXV0aC51bmljbG91ZGdyb3VwLmNvbS52biIsImF1ZCI6WyJhcGlfc3JlIiwiYXBpX2hvbWVfc2VydmljZSIsImFwaV9jb3JlX2JpZ3RlYyIsImFwaV9ocm1fYmlndGVjIl0sImNsaWVudF9pZCI6IndlYl9zX2hybV9wcm9kIiwic3ViIjoiODE3MzljNWMtMmNhMC00ZTBmLWFjYWItNjMzNzNlYThhMzRhIiwiYXV0aF90aW1lIjoxNjg4Mjk4MTAzLCJpZHAiOiJsb2NhbCIsInJvbGUiOlsicm9sX2NhYl9kcml2ZXIiLCJyb2xfaG9tZV9tYW5hZ2VyIiwicm9sX3NyZV9zYWxlciIsInJvbF9hZG1pbiIsInJvbF9ocm1fYWxsIiwicm9sX3Vzcl9tYW5hZ2VyIiwicm9sX2ludl9hZG1pbiIsInJvbF9zcmVfbWFuYWdlciIsInJvbF9ocm1fY2FyZCIsInJvbF9jdXN0X21hbmFnZXIiLCJyb2xfaHJtX21hbmFnZXIiLCJyb2xfY3JtX21hbmFnZXIiLCJyb2xfaW52X21hbmFnZXIiLCJyb2xfY2FiX3VzZXIiLCJyb2xfY3VzdG9tZXIiLCJyb2xfc3BrX21hbmFnZXIiLCJyb2xfc3JlX3VzZXIiXSwicGVybWlzc2lvbiI6WyJjbG1fY2FiX2RyaXZlciIsImNsbV9ob21fbWFuYWdlciIsImNsbV9zcmVfc2FsZXIiLCJmdWxsX2FjY2VzcyIsInNtc19hY2Nlc3MiLCJqb2JfYWNjZXNzIiwiY3VzdG9tZXJfYWNjZXNzIiwiY2hhdF9hY2Nlc3MiLCJjaGF0X2FkbWluIiwiY2xtX3Zpc19zYWxlciIsImNsbV92aXNfbWFuYWdlciIsImNsbV92aXNfYWRtaW4iLCJjbG1faG9tX3VzZXIiLCJjbG1faG9tX2FkbWluIiwiY2xtX2NhYl91c2VyIiwiY2xtX2NhYl9tYW5hZ2VyIiwiY2xtX3BheV91c2VyIiwiY2xtX3BheV9tYW5hZ2VyIiwiY2xtX3Nwa19tYW5hZ2VyIiwiY2xtX3Vzcl9tYW5hZ2VyIiwiY2xtX2hybV9tYW5hZ2VyIiwiY2xtX3Jlc19tYW5hZ2VyIiwiY2xtX3Jlc19pbnZlc3RvciIsImNsbV9yZXNfdXNlciIsImNsbV9jdXN0X3VzZXIiLCJjbG1fY3VzdF9tYW5hZ2VyIiwiY2xtX3NyZV91c2VyIiwiY2xtX3NyZV9tYW5hZ2VyIiwiY2xtX2ludl91c2VyIiwiY2xtX2ludl9tYW5hZ2VyIiwiY2xtX2ludl9hZG1pbiIsImNsbV9ocm1fY2FyZCIsImNsbV9ocm1fc2FsYXJ5IiwiY2xtX3NzdHZfdXNlciIsImNsbV9zc3R2X21hbmFnZXIiLCJjbG1fc3N0dl9hZG1pbiJdLCJuYW1lIjoiYWRtaW4iLCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIiwiYXBpX3NyZSIsImFwaV9ob21lX3NlcnZpY2UiLCJhcGlfY29yZV9iaWd0ZWMiLCJhcGlfaHJtX2JpZ3RlYyJdLCJhbXIiOlsicHdkIl19.Z2m7GlhDsmuYHOegB1cF-qzlN7kBYCk9vYpwfSwOZ7BDZrGbPSmyd9Mxc2VHOqs0KJjT-n64D0tRNRzsbgiKkzJ8nuo1WJMb4toXtAZXtqTIPs0F5UucqUcbdqZVgAcaJayTQKkF2WOHvAIaAvJKeqNSOHs0t8_JZilZDV_GxvqqkHokEik_eLL73mcNIyej7FBB1fRElXuMEE5_4TSH9CrNdo1910EeLhfFn04MdwvGHWBEIGpV7VHtGbDU61DPqhHjWtJRCBB4Pko7SWyH6pEN6_1yosNMTdtPacNN-ID6DM5aEcX3sQGsPcI2MbarDsnF8fKjBV9T9m3OkSutcU9SeSbQBk9RU3V-sgn8YmYDI-4rBBKQKeOkvYTCc86ZVe9Ui7TI9R1fqel-2khQE0ZAXoUXTU3pxrQl2rQ227-LMjEJ-bSKWcjyiiYu821kMT20dLnPpTvbv_Uvvy5OAI8lAb-OxBrpr33OdN0l2Ff4wsaNSIG5YLciVzt1UV29',
      }),
    });
    return next.handle(modifiedRequest);
  }
}
