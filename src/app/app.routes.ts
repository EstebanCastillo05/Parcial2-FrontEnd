import { Routes } from '@angular/router';
import { ProductoListComponent } from './components/lista/lista.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';



export const routes: Routes = [  // Asegúrate de que esté exportado
  { path: '', redirectTo: 'productos/nuevo', pathMatch: 'full' },
  { path: 'productos', component: ProductoListComponent },
  { path: 'productos/nuevo', component: CreateProductComponent },
  { path: 'productos/editar/:id', component: EditProductComponent },
];

