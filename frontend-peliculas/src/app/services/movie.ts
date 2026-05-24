import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  // La dirección local donde está corriendo nuestro servidor de Laravel
  private apiUrl = 'http://127.0.0.1:8000/api/movies';

  constructor(private http: HttpClient) { }

  // 1. Obtener todas las películas (Catálogo)
  getMovies(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // 2. Obtener una sola película por su ID (Vista Detallada)
  getMovie(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // 3. Crear una nueva película (Formulario de Agregar)
  createMovie(movie: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, movie);
  }

  // 4. Actualizar una película existente (Formulario de Editar)
  updateMovie(id: number, movie: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, movie);
  }

  // 5. Eliminar una película (Botón Borrar)
  deleteMovie(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}