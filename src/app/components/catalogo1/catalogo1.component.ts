import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService, Productos } from '../../servicios/producto.service';

@Component({
  selector: 'app-catalogo1',
  templateUrl: './catalogo1.component.html',
  styleUrls: ['./catalogo1.component.css']
})
export class Catalogo1Component implements OnInit {

 productos:Productos[]=[];

  constructor(private productoService:ProductoService, private router:Router) { }

  ngOnInit(): void {
    this.cargaProductos();
  }

  cargaProductos(){
   this.productos=this.productoService.getProducto();
   console.log(this.productos);
  }


  VerProductos(indiceProducto:number){
    console.log(indiceProducto);
    this.router.navigate(['/itemProducto', indiceProducto])
  }


}
