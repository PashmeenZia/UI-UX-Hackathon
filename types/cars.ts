

export interface Car {
    _id: string;
    name: string;
    type: string;
    image ? : {
        asset : {
            _ref : string;
            _type : "image"
        }
    };
    fuelCapacity: string;
    transmission: string;
    seatingCapacity: string;
    pricePerDay: string;
    slug: {
        _type: "slug"
        current: string;
    };
}