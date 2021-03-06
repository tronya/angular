import {EpisodeModel} from './episodes.model';
import {generateImage} from '../shared/helpers';

export class SeasonModel {
  public airDate: Date;
  public episodes: EpisodeModel[];
  public name: string;
  public overview: string;
  public id: number;
  public posterPath: string;
  public seasonNumber: number;

  constructor(season) {
    this.airDate = season.air_date;
    this.episodes = season.episodes.map(episode => new EpisodeModel(episode));
    this.name = season.name;
    this.overview = season.overview;
    this.id = season.id;
    this.posterPath = season.poster_path;
    this.seasonNumber = season.season_number;
  }

  get getPoster() {
    return generateImage(this.posterPath);
  }
}
