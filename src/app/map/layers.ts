import {Circle as CircleStyle, Fill, Stroke, Style} from 'ol/style';
import {Vector as VectorSource} from 'ol/source';
import {Vector as VectorLayer} from 'ol/layer';
import {GeometryTypeMock, jsonResp} from './geometry.mock';
import {IPoint} from './map.model';
import GeoJSON from 'ol/format/GeoJSON';

const coordinatesArray = (coords: IPoint[]) => {
  console.log(coords);
  let type = GeometryTypeMock.Polygon;
  if (coords.length > 1) {
    const coordsClone = [...coords];
    const first = coordsClone.splice(0, 1).pop().coordinates;
    const last = coordsClone.splice(-1, 1).pop().coordinates;
    if (first.latitude === last.latitude && first.longitude === last.longitude) {
      type = GeometryTypeMock.Polygon;
    } else {
      type = GeometryTypeMock.LineString;
    }
  }
  const coordinates = coords.map(({coordinates: coordsItem}: IPoint) => {
    return [coordsItem.longitude, coordsItem.latitude];
  });
  // console.log(type, coordinates);
  return {
    type,
    coordinates
  };
};

const features = jsonResp.zoneInformation[0].zoneDefinition.map((zone: any, i) => {
  return {
    type: 'Feature',
    id: i,
    geometry: coordinatesArray(zone.vertices),
  };
});

export const featuresSource = new VectorSource({
  features: new GeoJSON().readFeatures({
    type: 'FeatureCollection',
    features: [...features, {
      type: 'Feature',
      properties: {data: 'linestring'},
      geometry: {
        type: GeometryTypeMock.Polygon,
        coordinates: [[9.711076310636283, 50.871099301288595], [9.71295687443185, 50.87108354331063], [9.713550313176395, 50.86867215358721], [9.713477474437834, 50.865775703127255], [9.711103635640622, 50.86485620834934], [9.71007492466438, 50.865848458046784], [9.71162876187432, 50.86688135997461], [9.70985699518192, 50.86769180619227], [9.711666731895686, 50.8680959815632], [9.70995623691547, 50.86863921270775], [9.711544523747445, 50.86900566951441], [9.709561197818996, 50.87005298831569], [9.711076310636283, 50.871099301288595]],
      },
    }]
  }),
});

export const VectorLayerMock = new VectorLayer({
  name: jsonResp.zoneInformation[0].clientID,
  id: jsonResp.zoneInformation[0].objectID,
  source: featuresSource,
  style: new Style({
    fill: new Fill({
      color: 'rgba(255, 255, 255, 0.2)',
    }),
    stroke: new Stroke({
      color: '#ff0066',
      width: 4,
    }),
    image: new CircleStyle({
      radius: 7,
      fill: new Fill({
        color: '#ffcc33',
      }),
    })
  }),
});
