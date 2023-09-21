const eglStorage = () => {
  let storage = localStorage;
  return {
    getItem: key => {
      return new Promise((resolve, reject) => {
        resolve(storage.getItem(key));
      });
    },
    setItem: (key, item) => {
      return new Promise((resolve, reject) => {
        resolve(storage.setItem(key, item));
      });
    },
    removeItem: key => {
      return new Promise((resolve, reject) => {
        resolve(storage.removeItem(key));
      });
    }
  };
};

export default eglStorage();
