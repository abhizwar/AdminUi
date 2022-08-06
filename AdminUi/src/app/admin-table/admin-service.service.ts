import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdminData } from './admin-table/admin-table.interface';

@Injectable({
  providedIn: 'root',
})
export class AdminServiceService {
  constructor(private http: HttpClient) {}

  getAdminData(): Observable<AdminData[]> {
    return this.http.get<AdminData[]>(
      'https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json'
    );
  }
}
