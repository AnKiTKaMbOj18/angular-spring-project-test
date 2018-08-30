import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Mobile } from './mobile.model';


const httpOptions = {
  header: new HttpHeaders({'content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class MobileService {

  constructor(private http: HttpClient) { }

  //private userUrl='http://localhost:8090/spring-test/mobile';

  private mobileUrl='/mobiles';

  public getMobiles() {
    return this.http.get<Mobile[]>(this.mobileUrl+"/");
  }

  public deleteMobile(mobile) {
    return this.http.delete(this.mobileUrl+"/"+mobile.id);
  }

  public createMobile(mobile) {
    return this.http.post<Mobile>(this.mobileUrl,mobile);
  }
}
