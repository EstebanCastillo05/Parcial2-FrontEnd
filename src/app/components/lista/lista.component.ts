import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../interface/producto';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';  

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    HttpClientModule  
  ],
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ProductoListComponent implements OnInit {
  dataSource = new MatTableDataSource<Producto>();
  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'precio', 'cantidadStock', 'categoria'];

  constructor(private productService: ProductoService) {}

  ngOnInit(): void {
    this.productService.getAll().subscribe({
      next: (data) => {
        this.dataSource.data = data;
      },
      error: (err) => console.error('Error al obtener los productos', err)
      
    });
  }
}
