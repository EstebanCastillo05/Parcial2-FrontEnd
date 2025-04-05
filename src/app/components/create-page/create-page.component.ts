import { Component } from '@angular/core';
import { CreateProductComponent } from '../create-product/create-product.component';
import { CommonModule } from '@angular/common';
import { Producto } from '../../interface/producto';
import { Router } from '@angular/router';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-create-page',
  standalone: true,
  imports: [CreateProductComponent, CommonModule],
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.css']
})
export class CreatePageComponent {

  constructor(private router: Router, private productoService: ProductoService) { }

  producto: Producto = {
    nombre: '',
    descripcion: '',
    precio: 0,
    cantidadStock: 0,
    categoria: ''
  };

  onProductSubmitted(productData: Producto) {
    this.producto = { ...productData };  
    console.log("Producto registrado:", this.producto);
    this.productoService.createProduct(this.producto).subscribe(     
      (response) => {
        console.log('Producto creado correctamente:', response);
        this.router.navigate(['/product-list']).then(success => {
          if (success) {
            console.log('Navegación exitosa a la lista de productos');
          } else {
            console.error('Error en la navegación');
          }
        });
      },
      (error) => {
        console.error('Error al crear el producto:', error);
      }
    );
  }
}
