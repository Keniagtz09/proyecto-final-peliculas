<?php

namespace App\Http\Controllers;

use App\Models\Movie;
use Illuminate\Http\Request;

class MovieController extends Controller
{
    // 1. Catálogo: Devuelve todas las películas de la base de datos
    public function index()
    {
        return response()->json(Movie::all(), 200);
    }

    // 2. Agregar: Recibe los datos de Angular y crea una nueva película
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title'         => 'required|string|max:255',
            'director'      => 'nullable|string|max:255', 
            'synopsis'      => 'required|string',
            'genre'         => 'required|string|max:255',
            'year_released' => 'required|integer', // 👈 CORREGIDO: Cambiado de 'year' a 'year_released'
            'poster_url'    => 'required|url',
            'trailer_url'   => 'required|url',
        ]);

        $movie = Movie::create($validated);
        return response()->json($movie, 201); // 👈 Nota: Cambiado a 201 estándar de creación
    }

    // 3. Vista Detallada: Busca y devuelve una sola película por su ID
    public function show($id)
    {
        $movie = Movie::find($id);
        if (!$movie) {
            return response()->json(['message' => 'Película no encontrada'], 404);
        }
        return response()->json($movie, 200);
    }

    // 4. Editar: Busca la película por su ID y actualiza sus datos
    public function update(Request $request, $id)
    {
        $movie = Movie::find($id);
        if (!$movie) {
            return response()->json(['message' => 'Película no encontrada'], 404);
        }

        $validated = $request->validate([
            'title'         => 'required|string|max:255',
            'director'      => 'nullable|string|max:255',
            'genre'         => 'required|string|max:255',
            'year_released' => 'required|integer', 
            'poster_url'    => 'required|url',        
            'trailer_url'   => 'required|url',       
            'synopsis'      => 'required|string',
        ]);

        $movie->update($validated);
        return response()->json($movie, 200);
    }

    // 5. Eliminar: Busca la película y la borra de la base de datos
    public function destroy($id)
    {
        $movie = Movie::find($id);
        if (!$movie) {
            return response()->json(['message' => 'Película no encontrada'], 404);
        }

        $movie->delete();
        return response()->json(['message' => 'Película eliminada correctamente'], 200);
    }
}