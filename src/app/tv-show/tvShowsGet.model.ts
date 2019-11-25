import {TvShowModel} from './tv-show.model';

export class TvShowsGetModel {
  page: number;
  totalPage: number;
  // results: TvShowModel[];
  private resultsMock;
  totalResults: number;

  constructor(response) {
    this.page = response.page;
    this.resultsMock = response.results;
    // this.results = response.results.map(show => new TvShowModel(show));
    this.totalPage = response.total_pages;
    this.totalResults = response.total_results;
  }

  get results() {
    return this.resultsMock.map(show => new TvShowModel(show));
  }
}
