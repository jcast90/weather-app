const defaultState = {
  fetching: false,
  history: [],
  coord: {},
  weather: [],
  main: {},
  wind: {},
  clouds: {},
  dt: null,
  id: null,
  name: ''
};

export default function CityReducer(state = defaultState, { type, payload }) {
  switch (type) {
    case 'FETCH_CITY':
      return {
        ...state,
        fetching: true
      };
    case 'FETCH_CITY_SUCCESS': {
      const { name, dt } = payload;
      return {
        ...state,
        ...payload,
        history: [{ name, dt }],
        fetching: false
      };
    }
    case 'FETCH_CITY_FAIL':
      return {
        ...state,
        err: payload,
        fetching: false
      };
    default:
      return state;
  }
}
