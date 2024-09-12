import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ListadoPeliculasComponent } from "../../../peliculas/listado-peliculas/listado-peliculas.component";
import { FiltroPeliculas } from './filtroPelicula';

@Component({
  selector: 'app-filtro-peliculas',
  standalone: true,
  imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatSelectModule, MatCheckboxModule, ListadoPeliculasComponent],
  templateUrl: './filtro-peliculas.component.html',
  styleUrl: './filtro-peliculas.component.css'
})
export class FiltroPeliculasComponent implements OnInit {
  ngOnInit(): void {
    this.form.valueChanges.subscribe(valores=>{
      this.peliculas=this.peliculasOriginal;
      this.buscarPeliculas(valores as FiltroPeliculas);
    })
  }

  buscarPeliculas(valores:FiltroPeliculas){
    if(valores.titulo){
      this.peliculas=this.peliculas.filter(pelicula=>pelicula.titulo.indexOf(valores.titulo)!==-1)
    }
  
    if(valores.generoId !==0){
      console.log(this.peliculas.filter(pelicula =>pelicula.generos.indexOf(valores.generoId)!==-1));
      
      this.peliculas=this.peliculas.filter(pelicula =>pelicula.generos.indexOf(valores.generoId)!==-1)
    }

    if(valores.proximosEstrenos){
      this.peliculas=this.peliculas.filter(pelicula=>pelicula.proximosEstrenos)
    }

    if(valores.enCines){
      this.peliculas=this.peliculas.filter(pelicula=>pelicula.enCines)
    }
  }

  limpiar(){
    this.form.patchValue({
      titulo:'',enCines:false,generoId:0,proximosEstrenos:false
    });
  }
  private formBuilder =inject(FormBuilder);
  form=this.formBuilder.group({
    titulo:'',
    generoId:0,
    proximosEstrenos:false,
    enCines:false
  })

  generos=[
    {id:1,nombre:'Drama'},
    {id:2,nombre:'Acción'},
    {id:3,nombre:'Comedia'},
  ];
  
  peliculasOriginal=[
    {
      titulo:"spider-man",
      fechaLanzamiento:new Date(),
      precio:14000.4,
      poster:"https://pics.filmaffinity.com/spider_man_no_way_home-642739124-large.jpg",
      generos:[1,2,3],
      enCines:true,
      proximosEstrenos:false
    },
    {
      titulo:"spider-man",
      fechaLanzamiento:new Date("2016-05-03"),
      precio:322.4,
      poster:"https://pics.filmaffinity.com/spider_man_far_from_home-339542528-large.jpg",
      generos:[1,2],
      enCines:false,
      proximosEstrenos:true
    },
    {
      titulo: 'Inside Out 2',
      fechaLanzamiento: new Date(),
      precio: 1400.99,
      poster: 'https://upload.wikimedia.org/wikipedia/en/f/f7/Inside_Out_2_poster.jpg?20240514232832',
      generos:[1],
      enCines:true,
      proximosEstrenos:true
    },
    {
      titulo: 'Moana 2',
      fechaLanzamiento: new Date('2016-05-03'),
      precio: 300.99,
      poster: 'https://upload.wikimedia.org/wikipedia/en/7/73/Moana_2_poster.jpg',
      generos:[1,2,3],
      enCines:true,
      proximosEstrenos:false
    },
    {
      titulo: 'Bad Boys: Ride or Die',
      fechaLanzamiento: new Date('2016-05-03'),
      precio: 300.99,
      poster: 'https://upload.wikimedia.org/wikipedia/en/8/8b/Bad_Boys_Ride_or_Die_%282024%29_poster.jpg',
      generos:[1,3],
      enCines:false,
      proximosEstrenos:false
    },
    {
      titulo: 'Deadpool & Wolverine',
      fechaLanzamiento: new Date('2016-05-03'),
      precio: 300.99,
      poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Deadpool_%26_Wolverine_poster.jpg/220px-Deadpool_%26_Wolverine_poster.jpg',
      generos:[2],
      enCines:true,
      proximosEstrenos:true
    },
    {
      titulo: 'Oppenheimer',
      fechaLanzamiento: new Date('2016-05-03'),
      precio: 300.99,
      poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Oppenheimer_%28film%29.jpg/220px-Oppenheimer_%28film%29.jpg',
      generos:[1,2,3],
      enCines:true,
      proximosEstrenos:false
    },
    {
      titulo: 'The Flash',
      fechaLanzamiento: new Date('2016-05-03'),
      precio: 300.99,
      poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/The_Flash_%28film%29_poster.jpg/220px-The_Flash_%28film%29_poster.jpg',
      generos:[3],
      enCines:false,
      proximosEstrenos:false
    }];

    peliculas=this.peliculasOriginal;
}
