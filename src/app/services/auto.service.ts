import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AutoService {
  constructor(private http: HttpClient) {}
  private apiUrl = 'http://localhost:3000/auto';

  getAutos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  postAuto(persona: any): Observable<any> {
    return this.http.post(this.apiUrl, persona);
  }

  putNosotros(persona: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${persona.id}`, persona);
  }

  deleteAuto(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  getIDAuto(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
