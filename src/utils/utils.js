'use strict';

import { NUMBER_OF_CARDS, SHORT_MOVIE_MAX_MINUTES } from './constants';

const { smallScreen, mediumScreen, largeScreen } = NUMBER_OF_CARDS;

/**
 * Функция возвращает компонент для отображения, если текущий
 * location входит в пул доступных адресов из списка.
 *
 * @param  {Array} allowPathList
 * @param  {String} currentPath
 * @param  {React.Component} Component
 */
export const checkDisplayComponent = (
  allowPathList,
  currentPath,
  Component
) => {
  if (allowPathList.includes(currentPath)) {
    return Component;
  }
};

/**
 * Проверяет наличие ключей в объекте.
 * const obj = {
 *   image: {
 *     url: 'address'
 *   }
 * }
 * Вызов checkObjectProperty(obj, 'image.url') выведет строку 'address'.
 *
 * @param  {Object} obj
 * @param  {String} path
 */
export const checkObjectProperty = (obj, path) => {
  const keys = path.split('.');
  return keys.reduce((prev, key) => {
    if (prev === undefined || prev === null) {
      return undefined;
    }
    return prev[key];
  }, obj);
};

/**
 * Возвращает ширину экрана.
 */
export const getScreenWidth = () => window.screen.width;

/**
 * Возвращает базовое и добавляемое количество карточек
 * для разных разрешений экрана устройства.
 *
 * @param  {Number} screenWidth
 */
export const determineNumberOfCards = (screenWidth) => {
  switch (true) {
    case screenWidth > mediumScreen.resolution:
      return largeScreen;

    case screenWidth <= mediumScreen.resolution &&
      screenWidth > smallScreen.resolution:
      return mediumScreen;

    case screenWidth <= smallScreen.resolution:
      return smallScreen;
  }
};

/**
 * Форматирование времени для отображения на компоненте карточки.
 *
 * @param  {Number} minutes
 */
export const setTimeFormat = (minutes) => {
  const hours = (minutes / 60).toString()[0];
  minutes %= 60;

  return +hours === 0 ? `${minutes} минут` : `${hours}ч ${minutes}мин`;
};

/**
 * Функция проверяет, содержат ли заданные свойства объектов массива ключевое слово.
 * При этом регистр и пробелы по краям не учитываются.
 *
 * @param  {Array} collection
 * @param  {Array} propertyList
 * @param  {String} keyword
 */
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

/**
 * Функция определения короткометражек.
 *
 * @param  {Array} collection
 */
export const filterShortMovies = (collection) =>
  collection.filter((item) => item.duration <= SHORT_MOVIE_MAX_MINUTES);
