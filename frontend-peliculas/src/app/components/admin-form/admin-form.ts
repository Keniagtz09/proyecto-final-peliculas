import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MovieService } from '../../services/movie';

@Component({
  selector: 'app-admin-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './admin-form.html', // 👈 Revisa que esta línea exista y tenga la coma al final
  styleUrl: './admin-form.css'       // 👈 Revisa que esta línea exista correctamente
})
export class AdminFormComponent implements OnInit {
  // Objeto base que mapea los datos hacia el HTML
  movie: any = {
    title: '',
    director: '', // 👈 Validamos que esté dada de alta la propiedad del director
    genre: '',
    year_released: null,       // 👈 Tu backend lo pide como "year"
    poster_url: '',  // 👈 Sincronizado con la regla "poster_url"
    trailer_url: '',   // 👈 Agregado para cumplir la regla "trailer_url"
    synopsis: ''
  };

  isEditMode: boolean = false;
  movieId: number | null = null;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.isEditMode = true;
      this.movieId = Number(idParam);
      
      this.movieService.getMovie(this.movieId).subscribe({
        next: (data) => {
          this.movie = data;
        },
        error: (err) => console.error('Error al recuperar la película:', err)
      });
    }
  }

  saveMovie(): void {
    if (this.isEditMode && this.movieId) {
      this.movieService.updateMovie(this.movieId, this.movie).subscribe({
        next: () => {
          alert('¡Película actualizada con éxito!');
          this.router.navigate(['/']);
        },
        error: (err) => console.error('Error al actualizar:', err)
      });
    } else {
      this.movieService.createMovie(this.movie).subscribe({
        next: () => {
          alert('¡Película creada y añadida con éxito al catálogo!');
          this.router.navigate(['/']);
        },
        error: (err) => console.error('Error al guardar la nueva película:', err)
      });
    }
  }
}