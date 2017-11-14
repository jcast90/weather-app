const defaultState = {
  fetching: false,
  history: [],
  coord: {},
  weather: [{}],
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
      return {
        ...state,
        ...payload,
        fetching: false
      };
    }
    case 'FETCH_CITY_FAIL':
      return {
        ...state,
        err: payload,
        fetching: false
      };
    case 'UPDATE_HISTORY':
      return {
        ...state,
        history: [...state.history, payload]
      };
    default:
      return state;
  }
}
