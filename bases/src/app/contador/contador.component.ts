import { Component } from '@angular/core';
export class ContadorComponent{
  
    @Component({
      selector: './app-root',
      templateUrl: './contador.component.html'
    })
      title: string ="contador app";
      numero: number =0;
      base: number=5;
      calcular(numero:number) {
        this.numero+=numero;
      }
    }
    
