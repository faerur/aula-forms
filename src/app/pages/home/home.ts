import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
@Component({
  imports: [MatToolbarModule, RouterOutlet, RouterLink, RouterLinkActive],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {}
