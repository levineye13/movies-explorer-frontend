'use strict';

import humanizeDuration from 'humanize-duration';

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

export const setTimeFormat = (minutes) =>
  humanizeDuration(minutes * 60000, {
    language: 'ru',
    delimiter: ' ',
    spacer: ' ',
  });
