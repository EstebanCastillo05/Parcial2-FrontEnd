import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { FormsModule } from '@angular/forms';  
import { ListComponent } from './app/components/lista/lista.component';
import { CreateProductComponent } from './app/components/create-product/create-product.component';
import { EditProductComponent } from './app/components/edit-product/edit-product.component';
import { routes } from './app/app.routes';  

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateProductComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    routes,  
    FormsModule        
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}