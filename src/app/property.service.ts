import { Injectable } from '@angular/core';
import { Property, PropertyType, ListingType } from './property';


@Injectable()

export class PropertyService {
    
    // Array to store Property objets
    private propertyList: Property[] = [];

    constructor () { }

    // Method to insert new Property into array propertyList
    public insertProperty(id: number, name: string, address: string, type: PropertyType, listing: ListingType, bedrooms: number, bathrooms: number, parking: number, price: number, available: string, agentName: string, agentEmail: string, exclusive: boolean, agentPhone?: string) {
        let newProperty: Property = new Property(id, name, address, type, listing, bedrooms, bathrooms, parking, price, available, agentName, agentEmail, exclusive, agentPhone);
        this.propertyList.push(newProperty);
        alert("Property "+id+" has been listed");
    } 

    // Method to retrieve Propert objects from array propertyList
    public getProperties():Property[] {
        return this.propertyList;
    }

    // Method to return exclisive property listings
    public getExclusiveListings():Property[] {
        return this.propertyList.filter(property => property.exclusive);
    }

}