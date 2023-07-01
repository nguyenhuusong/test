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
    const modifiedRequest = req.clone({
      headers: new HttpHeaders({
        Authorization:
          'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjM1OTcwRkNDOTZBRDhENDU2MDg0RDZFQzU1NTQ1Nzc0MUVDMTc0NzMiLCJ0eXAiOiJhdCtqd3QiLCJ4NXQiOiJOWmNQekphdGpVVmdoTmJzVlZSWGRCN0JkSE0ifQ.eyJuYmYiOjE2ODgxODM3NjEsImV4cCI6MTY4ODE4NzM2MSwiaXNzIjoiaHR0cHM6Ly9kZXYtYXV0aC51bmljbG91ZGdyb3VwLmNvbS52biIsImF1ZCI6WyJhcGlfc3JlIiwiYXBpX2hvbWVfc2VydmljZSIsImFwaV9jb3JlX2JpZ3RlYyIsImFwaV9ocm1fYmlndGVjIl0sImNsaWVudF9pZCI6IndlYl9zX2hybV9wcm9kIiwic3ViIjoiODE3MzljNWMtMmNhMC00ZTBmLWFjYWItNjMzNzNlYThhMzRhIiwiYXV0aF90aW1lIjoxNjg4MTgzNzYxLCJpZHAiOiJsb2NhbCIsInJvbGUiOlsicm9sX2NhYl9kcml2ZXIiLCJyb2xfaG9tZV9tYW5hZ2VyIiwicm9sX3NyZV9zYWxlciIsInJvbF9hZG1pbiIsInJvbF9ocm1fYWxsIiwicm9sX3Vzcl9tYW5hZ2VyIiwicm9sX2ludl9hZG1pbiIsInJvbF9zcmVfbWFuYWdlciIsInJvbF9ocm1fY2FyZCIsInJvbF9jdXN0X21hbmFnZXIiLCJyb2xfaHJtX21hbmFnZXIiLCJyb2xfY3JtX21hbmFnZXIiLCJyb2xfaW52X21hbmFnZXIiLCJyb2xfY2FiX3VzZXIiLCJyb2xfY3VzdG9tZXIiLCJyb2xfc3BrX21hbmFnZXIiLCJyb2xfc3JlX3VzZXIiXSwicGVybWlzc2lvbiI6WyJjbG1fY2FiX2RyaXZlciIsImNsbV9ob21fbWFuYWdlciIsImNsbV9zcmVfc2FsZXIiLCJmdWxsX2FjY2VzcyIsInNtc19hY2Nlc3MiLCJqb2JfYWNjZXNzIiwiY3VzdG9tZXJfYWNjZXNzIiwiY2hhdF9hY2Nlc3MiLCJjaGF0X2FkbWluIiwiY2xtX3Zpc19zYWxlciIsImNsbV92aXNfbWFuYWdlciIsImNsbV92aXNfYWRtaW4iLCJjbG1faG9tX3VzZXIiLCJjbG1faG9tX2FkbWluIiwiY2xtX2NhYl91c2VyIiwiY2xtX2NhYl9tYW5hZ2VyIiwiY2xtX3BheV91c2VyIiwiY2xtX3BheV9tYW5hZ2VyIiwiY2xtX3Nwa19tYW5hZ2VyIiwiY2xtX3Vzcl9tYW5hZ2VyIiwiY2xtX2hybV9tYW5hZ2VyIiwiY2xtX3Jlc19tYW5hZ2VyIiwiY2xtX3Jlc19pbnZlc3RvciIsImNsbV9yZXNfdXNlciIsImNsbV9jdXN0X3VzZXIiLCJjbG1fY3VzdF9tYW5hZ2VyIiwiY2xtX3NyZV91c2VyIiwiY2xtX3NyZV9tYW5hZ2VyIiwiY2xtX2ludl91c2VyIiwiY2xtX2ludl9tYW5hZ2VyIiwiY2xtX2ludl9hZG1pbiIsImNsbV9ocm1fY2FyZCIsImNsbV9ocm1fc2FsYXJ5IiwiY2xtX3NzdHZfdXNlciIsImNsbV9zc3R2X21hbmFnZXIiLCJjbG1fc3N0dl9hZG1pbiJdLCJuYW1lIjoiYWRtaW4iLCJzY29wZSI6WyJvcGVuaWQiLCJwcm9maWxlIiwiYXBpX3NyZSIsImFwaV9ob21lX3NlcnZpY2UiLCJhcGlfY29yZV9iaWd0ZWMiLCJhcGlfaHJtX2JpZ3RlYyJdLCJhbXIiOlsicHdkIl19.RW80RECrOgpSY1eG2aZmgFlXghhdL5MtPz-8gDneQiuot-madotIF839TRVsEg1BaHKwSFibl12McQB2O2aviSeji50iaxDsVBWDS1TAW6Lw-tIaH1g6INas1_Bqv5TEiXBaKjYe0MKdi_abiRHCGPpMhi-G6T9zGTHN_xfOuMugR15kn88Dw0WtFvaYp8uxWYuCrpBDVv4B1Ev0dCUPRVFJjGLoOQErBixGF8Etvg64KpkeKMfvSJfoqwCRMKPnII19-0WHNgjctmOuids8JPsKpkqmhSkyqwO-UzGAJpB56yKUOK8zV6xoxSGDW-Wnga9Z6LtS-zkGtjAQ3nC_RIUxhVeNPksVPQKLmPiVLO4br_FQFGX5kTRPG1vhIRwO0hPDhLDuNPOiEdhCXmbXXmMdmeHH_H8yOKMteqreAqQTEdl7kmBgzqXwbgJVotWUduCZdomMl3h_5NNKc9eCqYntnwPtJ5F6CNAlenYKeC_IrGDgO4SKFPl7jbb7_ct7',
      }),
    });
    return next.handle(modifiedRequest);
  }
}
