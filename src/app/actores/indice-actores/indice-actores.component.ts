import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-indice-actores',
  standalone: true,
  imports: [RouterLink,MatButtonModule],
  templateUrl: './indice-actores.component.html',
  styleUrl: './indice-actores.component.css'
})
export class IndiceActoresComponent {

}
