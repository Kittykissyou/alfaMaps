import { useContext } from 'react';
import { MyContext } from './Context';
import Ymap from './Ymap';
import Dropdown from './Dropdown';

const Main = () => {
  const myArr = [1, 2, 3, 4];
  const data = useContext(MyContext);
  return (
    <div className="body">
      <Ymap />
      <div className="section _two"></div>
      <button onClick={data.getCoordinatesData}>Запросить координаты</button>
      <Dropdown />
    </div>
  );
};
export default Main;
