import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos-agregar',
  templateUrl: './productos-agregar.component.html',
  styleUrls: ['./productos-agregar.component.scss']
})
export class ProductosAgregarComponent implements OnInit {

  public tipoMunecos: any = [
    { id: 1, name: "Muñeca" },
    { id: 2, name: "Duende" },
    { id: 3, name: "Jirafa" },
    { id: 4, name: "Gato" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
