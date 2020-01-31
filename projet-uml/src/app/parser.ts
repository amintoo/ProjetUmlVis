export class parser {

  public classname: string;

  // TODO
   public analyze(fileContent: string) {

     var contentTab = fileContent.split('\n');
     console.log(contentTab);

    for(let i =0; i< fileContent.length; i++ ) {
      if (this.classname = 'Person') {

      // appel a la fonction qui permet de recuperer ls contenu

      }
      let Vregex = new RegExp ('%(<\w+>\s+){0,3}')     //visibility
      let Tregex = new RegExp ('%(\w|[<>[\]])+\s+')    //return type
      let Mregex = new RegExp ('\w+\s*')               //method name
      let Bregex = new RegExp ('\([^\)]*\)')           //method parameters

    }
  }

}
