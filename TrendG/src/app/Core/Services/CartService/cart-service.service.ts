import { Injectable } from '@angular/core';

@Injectable({//Permite que este servicio sea injectable, es decir que se puede tener su dependencia  en cualquier parte del código
  providedIn: 'root'//Permkite que el servicio este a nivel global y se de una sola instancia del mismo 
})
export class CartServiceService {

  constructor() { }
}
