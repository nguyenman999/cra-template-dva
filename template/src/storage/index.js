export const set = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
};

export const get = (key, defaultValue = null) => {
  try {
    const value = localStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (error) {
    console.log(error);
  }
  return defaultValue;
};
