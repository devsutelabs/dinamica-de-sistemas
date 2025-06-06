import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContactData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class ContactService {
  private apiUrl = 'http://localhost:3000/api/contact';

  constructor(private http: HttpClient) {}

  sendContact(data: ContactData): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
