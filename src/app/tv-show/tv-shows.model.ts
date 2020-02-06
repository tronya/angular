import {TvShowModel} from './tv-show.model';

interface ITvShowsGetModel {
  page: number;
  totalPage: number;
  results: TvShowModel[];
  totalResults: number;
}

export class TvShowsModel implements ITvShowsGetModel {
  page: number;
  totalPage: number;
  results: TvShowModel[];
  // resultsMock:[];
  totalResults: number;
  loading: boolean;

  constructor(response) {
    this.page = response.page;
    // this.resultsMock = response.results;
    this.results = response.results.map(show => new TvShowModel(show));
    this.totalPage = response.total_pages;
    this.totalResults = response.total_results;
  }

  // get results() {
  //   return this.resultsMock.map(show => new TvShowModel(show));
  // }
}
