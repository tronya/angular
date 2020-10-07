export interface ICrew {
  id: number;
  credit_id: string;
  name: string;
  department: string;
  job: string;
  profile_path: string;
}

export interface GuestStars {
  id: number;
  name: string;
  credit_id: string;
  character: string;
  order: number;
  profile_path: string;
}

export class EpisodesModel {
  airDate: string;
  crew: ICrew[];
  episodeNumber: number;
  guestStars: GuestStars[];
  name: string;
  overview: string;
  id: number;
  productionCode: string;
  seasonNumber: number;
  stillPath: string;
  voteAverage: number;
  voteCount: number;

  constructor(episode) {
    this.airDate = episode.air_date;
    this.crew = episode.crew;
    this.episodeNumber = episode.episode_number;
    this.guestStars = episode.guest_stars;
    this.name = episode.name;
    this.overview = episode.overview;
    this.id = episode.id;
    this.productionCode = episode.production_code;
    this.seasonNumber = episode.season_number;
    this.stillPath = episode.still_path;
    this.voteAverage = episode.vote_average;
    this.voteCount = episode.vote_count;
  }
}
