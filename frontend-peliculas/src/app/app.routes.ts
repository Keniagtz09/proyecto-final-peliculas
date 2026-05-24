import { Routes } from '@angular/router';
import { CatalogComponent } from './components/catalog/catalog';
import { MovieDetailComponent } from './components/movie-detail/movie-detail';
import { AdminFormComponent } from './components/admin-form/admin-form';

export const routes: Routes = [
  // 1. Ruta principal: Muestra el catálogo de películas
  { path: '', component: CatalogComponent },

  // 2. Vista detallada: Recibe el ID de la película que queremos ver
  { path: 'pelicula/:id', component: MovieDetailComponent },

  // 3. Crear película: Muestra el formulario vacío
  { path: 'administrar', component: AdminFormComponent },

  // 4. Editar película: Muestra el formulario con el ID de la película a cambiar
  { path: 'editar/:id', component: AdminFormComponent },

  // Si el usuario escribe cualquier otra cosa, lo regresa al catálogo
  { path: '**', redirectTo: '' }
];