import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { Map, latLng, tileLayer, Layer, marker, icon } from 'leaflet';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/dark-v9';
  lat = -122.420679;
  lang = 37.772537;

  constructor() {
  }

  ngOnInit() {

  }

  ionViewDidEnter() { this.leafletMap(); }
  
  leafletMap() {
    // In setView add latLng and zoom
    this.map = new Map('map').setView([5.5710605, 95.3702474], 100);
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '',
    }).addTo(this.map);

    icon({
      iconUrl: './assets/pins.png',
      iconSize: [40, 100]
    });

    marker([5.5715425, 95.3711706]).addTo(this.map)
      .bindPopup('Bakso Bakar Bang Tarjo')
      .openPopup();

  }

  ionViewWillLeave() {
    this.map.remove();
  }

}
