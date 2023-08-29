import { Component, OnInit, ElementRef } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  map;
  
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.initMap();
  }

  // initMap() {
  //   const map = L.map('map',{
  //     center: [0.0,0.0],
  //     zoom: 6
  //   });;

  //   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  //   }).addTo(map);

  //   L.marker([51.5, -0.09]).addTo(map)
  //     .bindPopup('A marker on the map.')
  //     .openPopup();
  // }

  private initMap(): void {
    const centroid: L.LatLngExpression = [37.97942252957514, 23.761962286505977];
    this.map = L.map('map', {
      center: centroid,
      zoom: 17
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
    var markersGroup = L.layerGroup();
    this.map.addLayer(markersGroup);
    var marker = L.marker(centroid,{icon: L.divIcon({className: 'poi', html: '<i class="text-primary fa-3x fa fa-map-marker" aria-hidden="true"></i>'})}).addTo(markersGroup);
  }
}
