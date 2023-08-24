
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegistroCurso } from '../models/registrocurso';

@Injectable({
  providedIn: 'root'
})
export class RegistrosService {
  private baseUrl = 'http://localhost:5000/api/registros';

  constructor(private http: HttpClient) {}

  obtenerRegistross(): Observable<RegistroCurso[]> {
    return this.http.get<RegistroCurso[]>(this.baseUrl);
  }

  obtenerRegistrosPorId(id: number): Observable<RegistroCurso> {
    return this.http.get<RegistroCurso>(`${this.baseUrl}/${id}`);
  }

  crearRegistros(curso: RegistroCurso): Observable<RegistroCurso> {
    return this.http.post<RegistroCurso>(this.baseUrl, curso);
  }

  actualizarRegistros(id: number, curso: RegistroCurso): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/${id}`, curso);
  }

  eliminarRegistros(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
