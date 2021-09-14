import { Component, ViewChild } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { FilmsService } from '../../services/films.service';
import { Film } from '../../interfaces/Film';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.page.html',
  styleUrls: ['./film-list.page.scss'],
})
export class FilmListPage {

  @ViewChild (IonInput) searchInput: IonInput;
  films: Film[] = [];
  filmsFound = true;
  isMoreData = true;
  pageNumber = 1;

  constructor(private filmsService: FilmsService) { }

  onUserInput(event): void {
    const searchTerm = event.detail.value.trim();
    this.resetSearch();
    if (searchTerm) {
      this.getFilms(searchTerm);
    }
  }

  onClickClearButton(): void {
    this.resetSearch();
    this.searchInput.value = '';
  }

  resetSearch(): void {
    this.films = [];
    this.pageNumber = 1;
    this.isMoreData = true;
    this.filmsFound = true;
  }

  getFilms(searchTerm: string): void {
    this.filmsService.getFilmsByTitle(searchTerm, this.pageNumber).subscribe(data => {
      if (data.Response === 'True') {
        this.films = data.Search;
        this.filmsFound = true;
        this.pageNumber++;
      } else {
        this.films = [];
        this.filmsFound = false;
      }
    });
  }

  loadMoreData(event): void {
    const searchTerm = this.searchInput.value.toString().trim();
    this.filmsService.getFilmsByTitle(searchTerm, this.pageNumber).subscribe(data => {
      if (data.Response === 'True') {
        this.films.push(...data.Search);
        event.target.complete();
        this.pageNumber++;
      } else {
        this.isMoreData = false;
        event.target.complete();
        return;
      }
    });
  }

}
