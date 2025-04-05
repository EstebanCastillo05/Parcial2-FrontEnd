import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, NgForm } from '@angular/forms';
import { Producto } from '../../interface/producto';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatCardModule, FormsModule, MatSelectModule],
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {
  @Output() productSubmitted = new EventEmitter<Producto>();

  productoCreate: Producto = {
    nombre: '',
    descripcion: '',
    precio: 0,
    cantidadStock: 0,
    categoria: ''
  };

  priceInvalid: boolean = false;
  

  validatePrice() {
    this.priceInvalid = this.productoCreate.precio <= 0;
  }


  submitForm(productForm: NgForm) {
    console.log(this.productoCreate); 
    if (productForm.invalid) {
      return; 
    }

    if (this.productoCreate.nombre && this.productoCreate.descripcion && this.productoCreate.precio > 0 && this.productoCreate.cantidadStock >= 0 && this.productoCreate.categoria) {
      this.productSubmitted.emit(this.productoCreate); 
      this.resetForm(productForm); 
    }
  }

  
  resetForm(productForm: NgForm) {
    this.productoCreate = {
      nombre: '',
      descripcion: '',
      precio: 0,
      cantidadStock: 0,
      categoria: ''
    };
    productForm.resetForm();
  }
}
