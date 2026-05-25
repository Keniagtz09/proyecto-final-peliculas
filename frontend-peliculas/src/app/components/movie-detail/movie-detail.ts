import { Component, OnInit, ChangeDetectorRef } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MovieService } from '../../services/movie'; 

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './movie-detail.html',
  styleUrl: './movie-detail.css'
})
export class MovieDetailComponent implements OnInit {
  movie: any = null;

  
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private cdr: ChangeDetectorRef 
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    
    if (id) {
      this.movieService.getMovie(id).subscribe({
        next: (data) => {
          this.movie = data;
          this.cdr.detectChanges(); 
        },
        error: (err) => {
          console.error('Error al obtener los detalles de la película:', err);
        }
      });
    }
  }
}