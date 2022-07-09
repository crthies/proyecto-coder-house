import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos-lista',
  templateUrl: './productos-lista.component.html',
  styleUrls: ['./productos-lista.component.scss']
})

export class ProductosListaComponent implements OnInit {
  longText = 'Este es un ejemplo de card';

  public munecos: any = [
    { id: 1, name: "Muñeca", nick: "Me llaman Laura" , description:"Esta muñeca es alegre y divertida", imagen:"./assets/images/muñeca-tejidos-a-crochet.jpg"},
    { id: 2, name: "Duende", nick: "Me llaman Eriberto" , description:"Alguien ha visto el duende?", imagen:"./assets/images/Duende-tejidos-a-crochet.jpg"},
    { id: 3, name: "Jirafa", nick: "Me llaman Manchas" , description:"Le gusta que le rasquen el cuello", imagen:"./assets/images/Jirafas-tejidos-a-crochet.jpg" },
    { id: 4, name: "Gato", nick: "Me llaman Cuchito" , description:"Todo el tiempo anda buscando abrazos", imagen:"./assets/images/Gato-tejidos-a-crochet.jpg" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
