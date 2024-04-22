import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { dataSeries } from './dataSeries';

import { SerieService } from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  series: Array<Serie> = [];

  constructor(private serieService: SerieService) { }

  getSerieList(){
    this.serieService.getSeries().subscribe(series =>{
      this.series = series;
    })
  }

  getPromedioTemporadas(series: Serie[]): number {

    const totalSeries = series.length;
    let totalTemporadas: number = 0;
    let promedioTemporadas: number = 0;

    series.forEach((serie) => totalTemporadas = totalTemporadas + serie.seasons);

    if (totalSeries > 0) {
        promedioTemporadas = totalTemporadas / totalSeries;
    }
    return promedioTemporadas;
  }

  ngOnInit() {
    this.getSerieList();
  }

}
