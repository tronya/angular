import {VideoItem} from '../shared/video-item';

interface ITvShowsGetModel {
  page: number;
  totalPage: number;
  results: VideoItem[];
  totalResults: number;
}

export class TvShowsModel implements ITvShowsGetModel {
  page: number;
  totalPage: number;
  results: VideoItem[];
  // resultsMock:[];
  totalResults: number;
  loading: boolean;

  constructor(response) {
    this.page = response.page;
    // this.resultsMock = response.results;
    this.results = response.results.map(show => new VideoItem(show));
    this.totalPage = response.total_pages;
    this.totalResults = response.total_results;
  }

  // get results() {
  //   return this.resultsMock.map(show => new TvShowModel(show));
  // }
}
