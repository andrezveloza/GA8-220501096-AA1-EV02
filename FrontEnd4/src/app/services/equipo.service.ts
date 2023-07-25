import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  url = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  //get Equipos
  getEquipos(): Observable<Equipo[]> {
    return this.http.get<Equipo[]>(this.url); // Corregido para especificar el tipo de datos del Observable
  }

  //get un Equipo
  getUnEquipo(id: string): Observable<Equipo> { // Corregido para especificar el tipo de datos del Observable
    return this.http.get<Equipo>(this.url + '/' + id); // Corregido para especificar el tipo de datos del Observable
  }

  // agregar equipo
  addEquipo(equipo: Equipo): Observable<any> { // Corregido para especificar el tipo de datos del Observable
    return this.http.post<any>(this.url, equipo); // Corregido para especificar el tipo de datos del Observable
  }

  //eliminar
  deleteEquipo(id: string): Observable<any> { // Corregido para especificar el tipo de datos del Observable
    return this.http.delete<any>(this.url + '/' + id); // Corregido para especificar el tipo de datos del Observable
  }

  // modificar
  editEquipo(equipo: Equipo, id?: string): Observable<any> { // Corregido para especificar el tipo de datos del Observable
    return this.http.put<any>(this.url + '/' + id, equipo); // Corregido para especificar el tipo de datos del Observable
  }
}

export interface Equipo {
  id_equipo?: string;
  nombre?: string;
  logo?: string;
}
