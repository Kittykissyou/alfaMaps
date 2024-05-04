import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
export const MyContext = createContext();

const Context = (props) => {
  class Config {
    constructor(url) {
      this.method = 'get';
      this.maxBodyLength = Infinity;
      this.url = url;
      this.headers = {};
    }
  }
  const coordinatesConfig = new Config(
    'https://script.google.com/macros/s/AKfycbwkfWNWnRv7MaRnVDvJkD0EQR5edYxi4K06GBnd24ZxQwAGS6YKTrKAip3SUdRhNuaL/exec?getMapCoordinates=true'
  );
  const [coordinatesData, setCoordinatesData] = useState(false);
  const [dropDownValue, setDropDownValue] = useState('');
  const [uniqueTimeslot, setUniqueTimeslot] = useState(false);
  const [nineEleven, setNineEleven] = useState(false);

  const hexColors = [
    '#000000', // Черный
    '#FF00FF', // Розовый
    '#000080', // Темно-синий
    '#800080', // Феолетовый
    '#FF0000', // Красный
    '#008080', // Болотный
    '#1E90FF', // Голубой
    '#00FF00', // Ярко-зеленый
    '#FFFF00', // Желтый
    '#00FFFF', // Морская волна
    '#8B4513', // Коричневый
    '#FF4500', // Оранжевый
    '#808000', // Оливковый
    '#0000FF', // Синий
  ];

  const getCoordinatesData = () => {
    axios
      .request(coordinatesConfig)
      .then((response) => {
        let res = Object.values(
          response.data.reduce((r, cur) => {
            const key = cur['name']; // символ "k" добавлен, чтобы автоматически не сортировало по цифровым ключам
            (r[key] = r[key] || []).push(cur);

            return r;
          }, {})
        );
        setCoordinatesData(res);
      })
      // .then((response) => {
      //   const arr = [];
      //   coordinatesData.map((el) => {
      //     el.map((e) => arr.push(e.interval));
      //   });
      //   setUniqueTimeslot(arr.filter((el, ind) => ind === arr.indexOf(el)));
      //   console.log(uniqueTimeslot);
      // })
      .catch((error) => {
        console.log(error);
      });
  };
  const value = {
    coordinatesData,
    getCoordinatesData,
    hexColors,
    dropDownValue,
    setDropDownValue,
    // uniqueTimeslot,
    // nineEleven,
    // setNineEleven,
  };
  return (
    <MyContext.Provider value={value}> {props.children}</MyContext.Provider>
  );
};
export default Context;
