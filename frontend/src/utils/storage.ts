const STORAGE_KEY = 'data';

const storage = {
  get: (key: string): any => {
    const data: Record<string, any> = storage.load();

    if (key in data) {
      return data[key];
    }

    return null;
  },

  set: (key: string, value: any) => {
    const data: Record<string, any> = storage.load();
    data[key] = value;
    storage.save(data);
  },

  load: (): Record<string, any> => {
    let data: Record<string, any> = {};

    if (localStorage[STORAGE_KEY]) {
      data = JSON.parse(localStorage[STORAGE_KEY]);
    } else {
      storage.save(data);
    }

    return data;
  },

  save: (data: Record<string, any>) => {
    localStorage[STORAGE_KEY] = JSON.stringify(data);
  },
};

storage.load();

export default storage;