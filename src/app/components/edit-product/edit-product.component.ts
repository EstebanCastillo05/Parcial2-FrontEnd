import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../interface/producto';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  imports: [FormsModule],
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  producto: Producto = {
    nombre: '',
    descripcion: '',
    precio: 0,
    cantidadStock: 0,
    categoria: ''
  };

  constructor(private productoService: ProductoService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productoService.getProductById(Number(id)).subscribe((producto) => {
        this.producto = producto;
      });
    }
  }

  updateProducto(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productoService.updateProduct(Number(id), this.producto).subscribe(() => {
        this.router.navigate(['/products']);
      });
    }
  }
}
