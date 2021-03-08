'use strict';

export const checkDisplayComponent = (
  allowPathList,
  currentPath,
  Component
) => {
  if (allowPathList.includes(currentPath)) {
    return Component;
  }
};

export const createObjectFromKeys = (obj, keysList) => {
  return keysList.reduce((acc, key) => {
    if (key.includes('.')) {
      key = key.split('.');
      const newKey = key[key.length - 1];
      const newValue = key.reduce((prev, path) => {
        if (prev === undefined || prev === null) {
          return undefined;
        }
        acc = { ...acc, [newKey]: prev[path] };
        return prev[path];
      }, obj);
    }

    return obj.hasOwnProperty(key) ? { ...acc, [key]: obj[key] } : acc;
  }, {});
};
