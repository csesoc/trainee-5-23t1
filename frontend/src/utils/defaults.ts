export type RestaurantEleType = {
  image?: string,
  text?: string
}

export type RestaurantStorageType = {
  name: string,
  image: string,
  location: string,
  googleMapsUrl: string,
  embed: string,
  priceRange: string,
  rating: number,
  tags: {
    suburb: string,
    cuisine: string,
    other: Array<string>
  },
  descriptions: string,
  elements: Array<RestaurantEleType>
};

export const restaurantDefault: RestaurantStorageType = {
  name: "",
  image: "",
  location: "",
  googleMapsUrl: "",
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