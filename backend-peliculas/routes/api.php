<?php

use App\Http\Controllers\MovieController;
use Illuminate\Support\Facades\Route;

// Esta línea crea automáticamente las 5 rutas (ventanillas) para nuestro CRUD de películas
Route::apiResource('movies', MovieController::class);