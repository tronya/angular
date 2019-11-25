import {generateImage} from '../../shared/helpers';

interface ICreatedBy {
  id: number;
  credit_id: string;
  name: string;
  gender: number;
  profile_path: string;

}

interface IGanres {
  id: number;
  name: string;

}

interface ILastEpisodeAir {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  season_number: number;
  show_id: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
}

interface INetworks {
  name: string;
  id: number;
  logo_path: string;
  origin_country: string;
}

interface IProductionCompanies {
  id: number;
  logo_path: null | string;
  name: string;
  origin_country: string;
}

interface ISeasons {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
}

export class TvShowDetail {
  backdropPath: string;
  createdBy: ICreatedBy;
  episodeRunTime: [number];
  firstAirDate: string;
  genres: IGanres[];
  homepage: string;
  id: number | null;
  inProduction: boolean;
  languages: string[];
  lastAirDate: string;
  lastEpisodeToAir: ILastEpisodeAir;
  name: string;
  networks: INetworks;
  nextEpisodeToAir: ILastEpisodeAir;
  numberOfEpisodes: number;
  numberOfSeasons: number;
  originCountry: string[];
  originalLanguage: string;
  originalName: string;
  overview: string;
  popularity: number;
  posterPath: string;
  productionCompanies: IProductionCompanies;
  seasons: ISeasons;
  status: string;
  type: string;
  voteAverage: number;
  voteCount: number;

  constructor(tvShowDetail) {
    this.backdropPath = tvShowDetail.backdrop_path;
    this.createdBy = tvShowDetail.created_by;
    this.episodeRunTime = tvShowDetail.episode_run_time;
    this.firstAirDate = tvShowDetail.first_air_date;
    this.genres = tvShowDetail.genres;
    this.homepage = tvShowDetail.homepage;
    this.id = tvShowDetail.id;
    this.inProduction = tvShowDetail.in_production;
    this.languages = tvShowDetail.languages;
    this.lastAirDate = tvShowDetail.last_air_date;
    this.lastEpisodeToAir = tvShowDetail.last_episode_to_air;
    this.name = tvShowDetail.name;
    this.networks = tvShowDetail.networks;
    this.nextEpisodeToAir = tvShowDetail.next_episode_to_air;
    this.numberOfEpisodes = tvShowDetail.number_of_episodes;
    this.numberOfSeasons = tvShowDetail.number_of_seasons;
    this.originCountry = tvShowDetail.origin_country;
    this.originalLanguage = tvShowDetail.original_language;
    this.originalName = tvShowDetail.original_name;
    this.overview = tvShowDetail.overview;
    this.popularity = tvShowDetail.popularity;
    this.posterPath = tvShowDetail.poster_path;
    this.productionCompanies = tvShowDetail.production_companies;
    this.seasons = tvShowDetail.seasons;
    this.status = tvShowDetail.status;
    this.voteAverage = tvShowDetail.vote_average;
    this.voteCount = tvShowDetail.vote_count;
  }

  get getBackDrops() {
    return generateImage(this.backdropPath);
  }

  get getPoster() {
    return generateImage(this.posterPath);
  }
}
