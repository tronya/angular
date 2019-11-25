import {generateImage} from '../shared/helpers';

export class TvShowModel {
  public posterPath?: string | null;
  public popularity?: number;
  public id?: number;
  public backdropPath?: string | null;
  public voteAverage?: number;
  public overview?: string;
  public firstAirDate?: string;
  public originCountry?: [string];
  public genreIds?: [number];
  public originalLanguage?: string;
  public voteCount?: number;
  public name?: string;
  public originalName?: string;

  constructor(public movie) {
    this.posterPath = movie.poster_path;
    this.popularity = movie.popularity;
    this.id = movie.id;
    this.backdropPath = movie.backdrop_path;
    this.voteAverage = movie.vote_average;
    this.overview = movie.overview;
    this.firstAirDate = movie.first_air_date;
    this.originCountry = movie.origin_country;
    this.genreIds = movie.genre_ids;
    this.originalLanguage = movie.original_language;
    this.voteCount = movie.vote_count;
    this.name = movie.name;
    this.originalName = movie.original_name;
  }

  get posterImage() {
    return generateImage(this.posterPath);
  }

  get backdropPathImage() {
    return generateImage(this.backdropPath);
  }

}
