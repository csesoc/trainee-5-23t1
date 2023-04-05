
export type restaurantTagType = {
    suburb: string,
    cuisine: string,
    other: Array<string>
};

export type restaurantEleDesType = Record<'image' | 'text', string>;

export type restaurantStorageType = {
    name: string,
    image: string,
    location: string,
    embed: string,
    priceRange: string,
    rating: number,
    tags: restaurantTagType,
    descriptions: string,
    elements: Array<restaurantEleDesType>
};

// ????
const restaurantsMain: Record<string, restaurantStorageType> = {
};

export const restaurantDefault: restaurantStorageType = {
    name: "",
    image: "",
    location: "",
    embed: "",
    priceRange: "",
    rating: 0,
    tags: {
        suburb: "",
        cuisine: "",
        other: []
    },
    descriptions: "",
    elements: []
};