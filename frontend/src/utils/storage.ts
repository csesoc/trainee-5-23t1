import { RestaurantEleType, RestaurantStorageType} from './defaults';

export const STORAGE_KEY = 'restaurants';

export const storage = {
  getRestaurant: (name: string): RestaurantStorageType | null => {
    const data: Record<string, RestaurantStorageType> = storage.load();

    if (name in data) {
      return data[name];
    }

    return null;
  },

  addNewRes: (restaurant: RestaurantStorageType) => {
    const data: Record<string, RestaurantStorageType> = storage.load();
    data[restaurant.name] = restaurant;
    storage.save(data);
  },

  setResValue: (restaurant: string, key: string, value: any) => {
    const data: Record<string, RestaurantStorageType> = storage.load();
    if (key in data[restaurant]) {
      data[restaurant][key] = value;
    }
    storage.save(data);
  },

  addTag: (restaurant: string, key: string, tag: string) => {
    const data: Record<string, RestaurantStorageType> = storage.load();
    
    if (key == 'other') {
      data[restaurant].tags.other.push(tag);
    } else {
      data[restaurant].tags[key] = tag;
    }

    storage.save(data);
  },

  removeTag: (restaurant: string, tag: string) => {
    const data: Record<string, RestaurantStorageType> = storage.load();
    const tagsArray: Array<string> = data[restaurant].tags.other;
    
    const index = tagsArray.indexOf(tag);
    if (index > -1) {
      tagsArray.splice(index, 1);
    }

    storage.save(data);
  },

  // NOTE; how tf do we know which one to remove when we want to remove it
  addElement: (restaurant: string, type: string, content: string) => {
    const data: Record<string, RestaurantStorageType> = storage.load();
    const newEle: RestaurantEleType = {}
    newEle[type] = content;
    data[restaurant].elements.push(newEle);
  },

  load: (): Record<string, RestaurantStorageType> => {
    let data: Record<string, RestaurantStorageType> = {};

    if (localStorage[STORAGE_KEY]) {
      data = JSON.parse(localStorage[STORAGE_KEY]);
    } else {
      storage.save(data);
    }

    return data;
  },

  save: (data: Record<string, RestaurantStorageType>) => {
    localStorage[STORAGE_KEY] = JSON.stringify(data);
  },
};
storage.load();
