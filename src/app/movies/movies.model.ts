import {generateImage} from '../shared/helpers';

export interface IMovie {
  posterPath: string | null;
  adult: boolean;
  backdropPath: string;
  overview: string;
  releaseDate: string;
  genreIds: [number];
  id: number;
  originalLanguage: string;
  originalTitle: string;
  title: string;
  popularity: number;
  voteAverage: number;
  video: false | string;
  voteCount: number;
  getPosterImage: string;
  getBackdropPathImage: string;
}

export class MovieItem implements IMovie {
  public posterPath: string | null;
  public adult: boolean;
  public backdropPath: string;
  public overview: string;
  public releaseDate: string;
  public genreIds: [number];
  public id: number;
  public originalLanguage: string;
  public originalTitle: string;
  public title: string;
  public popularity: number;
  public voteAverage: number;
  public video: false | string;
  public voteCount: number;

  constructor(movie) {
    this.adult = movie.adult;
    this.backdropPath = movie.backdrop_path;
    this.overview = movie.overview;
    this.releaseDate = movie.release_date;
    this.genreIds = movie.genre_ids;
    this.id = movie.id;
    this.originalLanguage = movie.original_language;
    this.originalTitle = movie.original_title;
    this.popularity = movie.popularity;
    this.posterPath = movie.poster_path;
    this.title = movie.title;
    this.video = movie.video;
    this.voteAverage = movie.vote_average;
    this.voteCount = movie.vote_count;
  }

  get getPosterImage() {
    return generateImage(this.posterPath);
  }

  get getBackdropPathImage() {
    return generateImage(this.backdropPath, 'w1280');
  }
}


export interface IMovies {
  page: number;
  results: IMovie[];
  dates?: {
    maximum: string;
    minimum: string;
  };
  total_pages: number;
  total_results: number;
  loading: boolean;
}

export class MoviesModel {
}
