<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Movie extends Model
{
protected $fillable = [
    'title', 
    'director', 
    'genre', 
    'year_released', // 👈 Verificar que coincida con tu migración
    'poster_url',    // 👈 Debe estar aquí
    'trailer_url',   // 👈 Debe estar aquí
    'synopsis'
];
}
