import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Property, PropertyType, ListingType } from '../property';
import { Injectable } from '@angular/core';
import { PropertyService } from '../property.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  // VARIABLES
  // Create new listing variables
  prop_id_new: string="";
  prop_name_new: string="";
  prop_address_new: string="";
  prop_type_new: string="";
  prop_listing_new: string="";
  prop_bedrooms_new: string="0";
  prop_bathrooms_new: string="0";
  prop_parking_new: string="0";
  prop_price_new: string=" ";
  prop_available_new: string="";
  prop_agentName_new: string="";
  prop_agentEmail_new: string="";
  prop_agentPhone_new: string="";
  prop_exclusive_new: boolean=false;

  constructor(private propertyService:PropertyService) { }


// METHODS

// Insert new property
addProperty(): void {
    // Convert number variables to strings
  const idNumber: number = parseInt(this.prop_id_new);
  const bedroomsNumber: number = parseInt(this.prop_bedrooms_new);
  const bathroomsNumber: number = parseInt(this.prop_bathrooms_new);
  const parkingNumber: number = parseInt(this.prop_parking_new);
  const priceNumber: number = parseInt(this.prop_price_new);
  // Add Property information
  this.propertyService.insertProperty(idNumber, this.prop_name_new, this.prop_address_new, this.prop_type_new as PropertyType, this.prop_listing_new as ListingType, bedroomsNumber, bathroomsNumber, parkingNumber, priceNumber, this.prop_available_new, this.prop_agentName_new, this.prop_agentEmail_new, this.prop_exclusive_new, this.prop_agentPhone_new);
  // Alert when property added
  alert("New property listing added.");
  // Reset fields after property added
  this.prop_id_new = "";
  this.prop_name_new = "";
  this.prop_address_new = "";
  this.prop_type_new = "";
  this.prop_listing_new = "";
  this.prop_bedrooms_new = "";
  this.prop_bathrooms_new = "";
  this.prop_parking_new = "";
  this.prop_available_new = "";
  this.prop_price_new = "";
  this.prop_agentName_new = "";
  this.prop_agentEmail_new = "";
  this.prop_agentPhone_new = "";
  this.prop_exclusive_new = false;
}


}