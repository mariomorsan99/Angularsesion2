import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../servicios/producto.service';

@Component({
  selector: 'app-item-producto',
  templateUrl: './item-producto.component.html',
  styleUrls: ['./item-producto.component.css']
})
export class ItemProductoComponent implements OnInit {

   producto:any;
  constructor(private productoService:ProductoService, private active:ActivatedRoute) {

    this.active.params.subscribe(result=>{

       console.log(result['id'])
       this.producto=productoService.getProductoId(result['id'])
       console.log(this.producto)


    })


   }

  ngOnInit(): void {
  }

}
