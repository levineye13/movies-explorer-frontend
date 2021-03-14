'use strict';

import { DISPLAY_RESOLUTION } from './constants';

const { smallScreen, mediumScreen } = DISPLAY_RESOLUTION;

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

export const checkObjectProperty = (obj, path) => {
  const keys = path.split('.');
  return keys.reduce((prev, key) => {
    if (prev === undefined || prev === null) {
      return undefined;
    }
    return prev[key];
  }, obj);
};

export const getScreenWidth = () => window.screen.width;

export const determineNumberOfCards = (screenWidth) => {
  switch (true) {
    case screenWidth > mediumScreen:
      return {
        base: 12,
        add: 3,
      };

    case screenWidth <= mediumScreen && screenWidth > smallScreen:
      return {
        base: 8,
        add: 2,
      };

    case screenWidth <= smallScreen:
      return {
        base: 5,
        add: 1,
      };
  }
};

export const setTimeFormat = (minutes) => {
  const hours = (minutes / 60).toString()[0];
  minutes %= 60;

  return +hours === 0 ? `${minutes} минут` : `${hours}ч ${minutes}мин`;
};

export const filterByKeyword = (collection, propertyList, keyword) =>
  collection.filter((item) =>
    propertyList.find((property) => {
      if (
        item[property] &&
        item[property]
          .trim()
          .toLowerCase()
          .includes(keyword.trim().toLowerCase())
      ) {
        return item;
      }
    })
  );

export const filterShortMovies = (collection) =>
  collection.filter((item) => item.duration <= 40);
