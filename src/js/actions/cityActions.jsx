import axios from 'axios';
// Action Creators

export const updateCity = cityName => {
  return function(dispatch) {
    dispatch({
      type: 'FETCH_CITY'
    });
    axios
      .get('http://api.openweathermap.org/data/2.5/weather', {
        params: {
          q: cityName,
          APPID: 'acfe0e277c8db9b729ad7dcb862c02c3',
          units: 'imperial'
        }
      })
      .then(res => {
        dispatch({
          type: 'FETCH_CITY_SUCCESS',
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: 'FETCH_CITY_FAIL',
          payload: err
        });
      });
  };
};
