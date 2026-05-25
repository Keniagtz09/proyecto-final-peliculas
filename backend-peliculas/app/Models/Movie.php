<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Movie extends Model
{
protected $fillable = [
    'title', 
    'director', 
    'genre', 
    'year_released', 
    'poster_url',    
    'trailer_url',   
    'synopsis'
];
}
