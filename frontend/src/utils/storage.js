export const STORAGE_KEY = "restaurants";

export const restaurantDefault = {
  name: "",
  place_id: "",
  image:
    "https://images.unsplash.com/photo-1576854288157-8486dde4f145?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3087&q=80",
  location: "",
  googleMapsUrl: "",
  embed: "",
  priceRange: "",
  rating: 0,
  tags: {
    suburb: "",
    cuisine: "",
    other: [],
  },
  descriptions: "",
  elements: [],
};

export const storage = {
  getRestaurant: (name) => {
    const data = storage.load();
    if (name in data) {
      return data[name];
    }
    return null;
  },

  setRes: (restaurant) => {
    const data = storage.load();
    data[restaurant.name] = restaurant;
    storage.save(data);
  },

  load: () => {
    let data = {};

    if (localStorage[STORAGE_KEY]) {
      data = JSON.parse(localStorage[STORAGE_KEY]);
    } else {
      storage.save(data);
    }

    return data;
  },

  save: (data) => {
    localStorage[STORAGE_KEY] = JSON.stringify(data);
  },
};

storage.load();
