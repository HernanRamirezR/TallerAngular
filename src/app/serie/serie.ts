export class Serie {
    id: number
    name: string;
    channel: string;
    seasons: number;
    description: string;
    webpage: string;
    poster: string;
  
    constructor(id: number, name: string, plataforma: string, temporadas:number,  resumen:string, enlace:string, img:string) {
      this.id = id
      this.name = name;
      this.channel = plataforma;
      this.seasons = temporadas
      this.description = resumen;
      this.webpage = enlace;
      this.poster = img;
    }
}
