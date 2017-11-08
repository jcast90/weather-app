import { connect } from 'react-redux';
import CityInfo from '../CityInformation';

// This function takes the store and returns an object
// that's passed to the props of the component.
function mapStoreToProps(store) {
  return {
    city: store.city.city,
    latLong: store.cityInfo.amount,
    pressure: store.cityInfo.pressure,
    humidity: store.cityInfo.humidity,
    lowestTemp: store.cityInfo.lowestTemp,
    highestTemp: store.cityInfo.highestTemp,
    windSpeed: store.cityInfo.windSpeed
  };
}

// This might look odd but, connect returns a function,
// that is then called with the component itself.
export default connect(mapStoreToProps)(CityInfo);
