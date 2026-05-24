import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router'; // 👈 Se agrega RouterLinkActive

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive], // 👈 Se da permiso de usarlo aquí
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent { }