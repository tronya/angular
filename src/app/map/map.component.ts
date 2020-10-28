import {Component, OnDestroy, OnInit} from '@angular/core';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import {Circle as CircleStyle, Fill, Stroke, Style} from 'ol/style';
import {Draw, Modify, Snap, Select} from 'ol/interaction';
import {OSM, Vector as VectorSource} from 'ol/source';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';
import {featuresSource, VectorLayerMock} from './layers';
import {GeometryTypeMock} from './geometry.mock';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, OnDestroy {
  private selectedCoordinates: [[number, number]];
  private map?: Map;
  private draw: Draw;
  private snap: Snap;
  public selectedType: GeometryTypeMock = GeometryTypeMock.Polygon;
  public modifiedLayerId = '';

  private raster = new TileLayer({
    source: new OSM(),
  });

  constructor() {
  }

  ngOnInit() {
    this.map = new Map({
      layers: [this.raster, VectorLayerMock],
      target: 'map',
      view: new View({
        projection: 'EPSG:4326',
        center: [9.708808, 50.86684799999999],
        zoom: 16,
      }),
    });

    const select = new Select({
      // layers: layers => console.log(layers)
    });
    // select.on('select', click => {
    //   console.log(click);
    // });
    this.map.addInteraction(select);

    const modify = new Modify({
      source: featuresSource,
    });
    this.map.addInteraction(modify);

    this.addInteractions();
  }

  public addInteractions(type?: GeometryTypeMock) {
    this.draw = new Draw({
      source: featuresSource,
      type: type || this.selectedType,
    });

    this.draw.on('drawstart', (drawstart) => {
      console.log(drawstart);
    });
    this.draw.on('drawend', (drawend) => {
      console.log(drawend);
      const drawEndCoordinates = drawend.feature.getGeometry().getCoordinates()[0];
      const layerId = `${this.selectedType}_${drawend.feature.ol_uid}`;
      drawend.feature.setId(layerId);
      this.coordinatesCallbackSave(drawEndCoordinates, layerId);
    });
    this.draw.on('drawabort', (drend) => {
      console.log(drend);
    });
    this.map.addInteraction(this.draw);

    this.snap = new Snap({source: featuresSource});
    this.map.addInteraction(this.snap);
  }

  private coordinatesCallbackSave(coordinates: [[number, number]], layerId: string): void {
    this.selectedCoordinates = coordinates;
    this.modifiedLayerId = layerId;
  }

  private clearInteractions() {
    this.map.removeInteraction(this.draw);
    this.map.removeInteraction(this.snap);
    this.addInteractions();
  }

  ngOnDestroy() {
    this.clearInteractions();
  }

  public onChange($event: GeometryTypeMock) {
    this.clearInteractions();
  }

}
