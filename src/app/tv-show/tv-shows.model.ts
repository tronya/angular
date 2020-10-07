import {VideoItem} from '../shared/video-item';
import {SeasonModel} from '../models/season.model';

interface ITvShowsGetModel {
  page: number;
  totalPage: number;
  results: VideoItem[];
  totalResults: number;
  tvShowDetails?: VideoItem;
}

export class TvShowsModel implements ITvShowsGetModel {
  page: number;
  totalPage: number;
  results: VideoItem[];
  totalResults: number;
  loading: boolean;
  tvShowDetails: VideoItem;
  season: SeasonModel;

  constructor(response) {
    this.page = response.page;
    this.results = response.results.map(show => new VideoItem(show));
    this.totalPage = response.total_pages;
    this.totalResults = response.total_results;
    this.tvShowDetails = response.tvShowDetails;
    this.season = response.season;
  }
}
