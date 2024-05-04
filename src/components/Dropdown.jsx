import { useContext } from 'react';
import { MyContext } from './Context';

const Dropdown = () => {
  const data = useContext(MyContext);
  return data.coordinatesData ? (
    <div className="dropdown">
      <input
        list="data"
        onChange={(e) => data.setDropDownValue(e.target.value)}
        placeholder="Поиск по имени"
      />
      <datalist id="data">
        {data.coordinatesData.map((op, i) => (
          <option key={i} value={op[0].name} type="submit"></option>
        ))}
      </datalist>
      {data.uniqueTimeSlot ? (
        data.uniqueTimeSlot.map((el, index) => <h1>{`${el}`}</h1>)
      ) : (
        <></>
      )}
    </div>
  ) : (
    <></>
  );
};
export default Dropdown;
