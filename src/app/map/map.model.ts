export enum ECoordinate {
  latitude = 'latitude',
  longitude = 'longitude',
}
export enum ECoordinateSystem {
  WGS84 = 'WGS84',
  EOV = 'EOV',
  LV95 = 'LV95',
  ETRS89 = 'ETRS89',
}

export interface ICoordinates {
  coordinateSystem?: ECoordinateSystem;
  latitude: number;
  longitude: number;
}

export interface IPoint {
  coordinates: ICoordinates;
  index?: number;
}
