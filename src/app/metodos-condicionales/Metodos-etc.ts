
export class MetodosCondicionales {

  public variable1: boolean = true;
  public variable2: boolean = true;
  public variable3: boolean = true;

  constructor() {
  }

  public probandoCondicionales(): string{
    if(this.variable1){
      return 'variable1 es verdadera';
    }else if(this.variable2){
      if(this.variable3){
        return 'variable 2 y 3 son verdaderas';
      }
      return 'variable 2 es verdadera';
    }
    return 'ninguna es verdadera';
  }

   

}
