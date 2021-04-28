export class Recitateur{

  id   : number;
  nom   : string;
  imageUrl   : string;
  description : string;
  paragrapheF:string;
  paragrapheA:string;
  urls :any [];
  urls2: any [];



  constructor(recitateur?: { id?: any; nom?: any; imageUrl?: any;paragrapheA?:any;paragrapheF?:any; description?: any; urls?: any; urls2?: any; } | undefined){
      recitateur = recitateur || {};
      this.id = recitateur.id || 1 ;
      this.nom = recitateur.nom || '' ;
      this.imageUrl = recitateur.imageUrl || '' ;
      this.paragrapheA = recitateur.paragrapheA || '' ;
      this.paragrapheF = recitateur.paragrapheF || '' ;

      this.description = recitateur.description || '' ;
      this.urls = recitateur.urls || [] ;
      this.urls2 = recitateur.urls2 || [] ;

  }
}
