import { Component } from z;
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
    contador:number=0;
    ids = [23, 34, 100, 124, 44];
    sumar(){
       for(let i =0 ; i < this.heroes.length ; i++)
       return(this.heroes[i]); 
     }
     restar(){
      for(let i =0 ; i < this.heroes.length ; i--)
      return(this.heroes[i]); 
    }
     edadsumar() {
     for(var i = 0; i < this.ids.length; i++)
     return(this.ids[i])
    }
    edadrestar() {
      for(var i = 0; i < this.ids.length; i++)
      return(this.ids[i])
     }
     Mayusculas(){
       return this.heroes[this.contador].toUpperCase;
    }
    concatenado(){
      return this.heroes,this.ids,this.Mayusculas;
    }   
    
}
