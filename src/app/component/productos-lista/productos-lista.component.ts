import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos-lista',
  templateUrl: './productos-lista.component.html',
  styleUrls: ['./productos-lista.component.scss']
})

export class ProductosListaComponent implements OnInit {
  longText = 'Este es un ejemplo de card';

  public munecos: any = [
    { id: 1, name: "Muñeca", nick: "Me llaman Laura" , description:"Esta muñeca es alegre y divertida" },
    { id: 2, name: "Duende", nick: "Me llaman Eriberto" , description:"Alguien ha visto el duende?" },
    { id: 3, name: "Jirafa", nick: "Me llaman Manchas" , description:"Le gusta que le rasquen el cuello" },
    { id: 4, name: "Gato", nick: "Me llaman Punto Blanco" , description:"Todo el tiempo anda buscando abrazos" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
