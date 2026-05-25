import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MovieService } from '../../services/movie';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './catalog.html',
  styleUrl: './catalog.css'
})
export class CatalogComponent implements OnInit {
  movies: any[] = [];

  
  constructor(
    private movieService: MovieService,
    private cdr: ChangeDetectorRef 
  ) { }

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies(): void {
    this.movieService.getMovies().subscribe({
      next: (data) => {
        this.movies = data;
        this.cdr.detectChanges(); 
      },
      error: (err) => {
        console.error('Error al cargar las películas desde el servidor:', err);
      }
    });
  }

  deleteMovie(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar esta película de forma permanente?')) {
      this.movieService.deleteMovie(id).subscribe({
        next: () => {
          this.movies = this.movies.filter(movie => movie.id !== id);
          this.cdr.detectChanges(); 
        },
        error: (err) => {
          console.error('Error al intentar eliminar la película:', err);
        }
      });
    }
  }
}