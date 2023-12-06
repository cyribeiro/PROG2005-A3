import { Component } from '@angular/core';
import { Property, PropertyType, ListingType } from '../property';
import { Injectable } from '@angular/core';
import { PropertyService } from '../property.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  // Array of properties
  arrProperties: Property[]=[];

  // Constructor
  constructor(private propertyService:PropertyService) { }

  // Method to display properties from propertyList
  displayProperties():void {
    this.arrProperties=this.propertyService.getProperties();
  }

}
