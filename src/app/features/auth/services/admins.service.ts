import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Admin {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  // Puedes agregar más campos según tu modelo
}

@Injectable({ providedIn: 'root' })
export class AdminsService {
  private apiUrl = 'http://localhost:3000/api/admins'; // Cambia el puerto si tu backend usa otro

  constructor(private http: HttpClient) {}

  getAdmins(): Observable<Admin[]> {
    return this.http.get<Admin[]>(this.apiUrl);
  }

  getAdminById(id: number): Observable<Admin> {
    return this.http.get<Admin>(`${this.apiUrl}/${id}`);
  }

  createAdmin(admin: Partial<Admin> & { password: string }): Observable<any> {
    return this.http.post(this.apiUrl, admin);
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { username, password });
  }
}
