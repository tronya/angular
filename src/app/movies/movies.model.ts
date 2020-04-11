import {VideoItem} from '../shared/video-item';

export interface IMovies {
  movie_detail?: VideoItem;
  page: number;
  results: VideoItem[];
  dates?: {
    maximum: string;
    minimum: string;
  };
  total_pages: number;
  total_results: number;
  loading: boolean;
}
