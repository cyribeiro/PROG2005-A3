

// Enums for listing and property types
export enum ListingType {
    Sale="For Sale", Rent="For Rent"
  }
  export enum PropertyType {
    apartment="Apartment", house="House"
  }


// Property class
export class Property {
    constructor(
    public id: number,
    public name: string,
    public address: string,
    public type: PropertyType,
    public listing: ListingType, 
    public bedrooms: number,
    public bathrooms: number,
    public parking: number,
    public price: number,
    public available: string,
    public agentName: string,
    public agentEmail: string,
    public exclusive: boolean,
    public agentPhone?: string
    ) { }

}
