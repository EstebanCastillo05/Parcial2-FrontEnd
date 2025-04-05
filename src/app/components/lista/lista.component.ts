import { Component } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../interface/producto';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-product-list',
  templateUrl: './list.component.html',
  imports: [MatTableModule],
  standalone: true,
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'precio', 'cantidadStock', 'categoria'];
  dataSource: Producto[] = [];

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.productoService.getAllProducts().subscribe(productos => {
      this.dataSource = productos;
    }, error => {
      console.error('Error al obtener productos:', error);
    });
  }
}
