import { Component } from '@angular/core';
export class heoresComponent{
  
    @Component({
      selector: './heroes-component',
      templateUrl: './heroes.component.html'
    })
      title: string ="contador app";
      heroes: string[] = [
        "Iron Man",
        "Spiderman",
        "Thor",
        "Hulk",
        "Black Widow",
        "Hawk Eye"
    ];
     constructor(){
       for(let i =0 ; i < this.heroes.length ; i++)
       console.log(this.heroes[i]); 
     }

    
}
