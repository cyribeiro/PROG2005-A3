import { Component } from '@angular/core';
import { Property, PropertyType, ListingType } from '../property';
import { Injectable } from '@angular/core';
import { PropertyService } from '../property.service';

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})
export class Tab5Page {
  // Array of exclusive properties
    arrExclusiveProperties: Property[]=[];
  // Variables
  prop_id_exclusive: string = "";
  // Constructor
  constructor(private propertyService:PropertyService) { }

  // Methods
  // Display exclusive listings
  displayExclusiveProperties():void {
    this.arrExclusiveProperties=this.propertyService.getExclusiveListings();
  }

}
