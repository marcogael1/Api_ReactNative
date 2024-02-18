import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private baseUrl = 'http://localhost/php';

  constructor(private http: HttpClient) { }

  addPersona(persona: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/agregarPersona.php`, persona);
  }

  obtenerPersonas(): Observable<any> {
    return this.http.get<any[]>(`${this.baseUrl}/obtenerPersonas.php`);
  }

  obtenerPersonaPorId(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/obtenerPersonaid.php?id=${id}`);
  }

  eliminarPersona(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/eliminaPersona.php?id=${id}`);
  }

  actualizarPersona(persona: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/actualizarPersona.php`, persona);
  }
}
