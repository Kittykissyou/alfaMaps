import { useContext } from 'react';
import { MyContext } from './Context';
import { YMaps, Map, Placemark, Clusterer } from '@pbe/react-yandex-maps';

const Ymap = () => {
  const data = useContext(MyContext);

  return (
    <div className="mapContainer">
      <YMaps className="mapContainer1">
        <Map
          defaultState={{
            center: [52.033507, 113.500829],
            zoom: 12,
            controls: ['zoomControl', 'fullscreenControl'],
          }}
          modules={['control.ZoomControl', 'control.FullscreenControl']}
          width={'100%'}
          height={'500px'}
        >
          {data.coordinatesData ? (
            data.coordinatesData.map((coordinates, index) =>
              coordinates.map((c, i) => (
                <Placemark
                  key={i}
                  geometry={data.dropDownValue === '' ? c.coordinates : [0, 0]}
                  options={{ iconColor: `${data.hexColors[index]}` }}
                />
              ))
            )
          ) : (
            <></>
          )}
          {data.dropDownValue ? (
            data.coordinatesData
              .filter((el) => el[0].name === data.dropDownValue)
              .map((coordinates, index) =>
                coordinates.map((c, i) => (
                  <Placemark
                    key={i}
                    geometry={c.coordinates}
                    options={{ iconColor: `${data.hexColors[index]}` }}
                  />
                ))
              )
          ) : (
            <></>
          )}
        </Map>
      </YMaps>
    </div>
  );
};
export default Ymap;
// {data.coordinatesData ? (
//   data.coordinatesData
//     .filter(
//       (coordinates, index) =>
//         coordinates[0].name === 'Миронова Юлия Анатольевна'
//     )
//     .map((c, i) => (
//       <Placemark
//         key={i}
//         geometry={c.coordinates}
//         options={{ iconColor: `${data.hexColors[i]}` }}
//       />
//     ))
// )
