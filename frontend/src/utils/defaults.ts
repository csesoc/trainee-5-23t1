export type RestaurantEleType = {
  image?: string,
  text?: string
}

export type RestaurantStorageType = {
  name: string,
  place_id: string,
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
  place_id: "",
  image: "https://images.unsplash.com/photo-1576854288157-8486dde4f145?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3087&q=80",
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