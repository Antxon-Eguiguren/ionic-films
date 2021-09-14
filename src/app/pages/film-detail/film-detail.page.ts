import { Component, OnInit } from '@angular/core';
import { Film } from '../../interfaces/Film';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.page.html',
  styleUrls: ['./film-detail.page.scss'],
})
export class FilmDetailPage implements OnInit {

  film: Film;

  constructor() { }

  ngOnInit(): void {
    this.film = history.state;
  }

}
