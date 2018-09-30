export class HouseInput {
    public usableAreas: number;
    public listingType: string;
    public createdAt: string;
    public listingStatus: string;
    public id: string;
    public parkingSpaces: number;
    public updatedAt: string;
    public owner: boolean;
    public images: Array<string>;
    public address: {
        city: string;
        neighborhood: string;
        geoLocation: {
            precision: string;
            location: {
                lon: number;
                lat: number;
            };
        };
    };
    public bathrooms: number;
    public bedrooms: number;
    public pricingInfos: {
        yearlyIptu: string;
        price: string;
        businessType: string;
        monthlyCondoFee: string;
    };
}
