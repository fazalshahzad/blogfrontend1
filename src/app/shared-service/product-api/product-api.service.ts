import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  constructor(
    private readonly http:HttpClient
  ) { }
  createProductCart(payLoad:any){
    return this.http.post('https://blog-backend-kohl.vercel.app//ProductManagement/ProductData',payLoad)
  }
  getProduct(){
    return this.http.get("https://blog-backend-kohl.vercel.app//ProductManagement/GetProductData")
  }
  getProductWithId(id:any){
return  this.http.get(`https://blog-backend-kohl.vercel.app//ProductManagement/getDocumentById/${id}`)  // 1st step create first slug and second slug then go to server.js commit section 👍👍👍 // after creating this slug getDocumentById/ then give id from here
  }
  deleteProductWithId(id:any){           //soft delete
return  this.http.delete(`https://blog-backend-kohl.vercel.app//ProductManagement/DeleteProductById/${id}`)  
  }
  hardDeleteProductById(_id:any){
  return this.http.delete(`https://blog-backend-kohl.vercel.app//ProductManagement/hardDeleteProductById/${_id}`)
  }
  upDateProductById(payLoad:any){ 
return  this.http.post(`https://blog-backend-kohl.vercel.app//ProductManagement/updateProductById/`,payLoad)
  }
//   getProductByCompanyName(companyName:any){
// return this.http.get(`https://blog-backend-kohl.vercel.app//ProductManagement`)
//   }
addToCart(product: any) {
  return this.createProductCart(product);
  }
}
