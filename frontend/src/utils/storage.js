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

  setResValue: (restaurant, key, value) => {
    const data = storage.load();
    if (key in data[restaurant]) {
      data[restaurant][key] = value;
    }
    storage.save(data);
  },

  addTag: (restaurant, key, tag) => {
    const data = storage.load();

    if (key === "other") {
      data[restaurant].tags.other.push(tag);
    } else {
      data[restaurant].tags[key] = tag;
    }

    storage.save(data);
  },

  removeTag: (restaurant, tag) => {
    const data = storage.load();
    const tagsArray = data[restaurant].tags.other;

    const index = tagsArray.indexOf(tag);
    if (index > -1) {
      tagsArray.splice(index, 1);
    }

    storage.save(data);
  },

  addElement: (restaurant, type, content) => {
    const data = storage.load();
    const newEle = {};
    newEle[type] = content;
    data[restaurant].elements.push(newEle);
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
