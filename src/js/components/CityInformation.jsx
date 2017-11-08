import React from 'react';
import { connect } from 'react-redux';

class CityInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const city = this.props.city;
    return (
      <div className="card">
        <h2 className="card-header">City Info</h2>

        <div className="card-body">
          <div className="card-title">
            <h2>{city.name}</h2>
            <h3>
              {city.weather.main}
              {city.weather.description}
              Lat/Long: {city.coord.lat},{city.coord.lon}
            </h3>
            <hr />
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="city-title">Temperature</div>
              <div className="city-output">{city.main.temp}F</div>
            </div>
            <div className="col-md-4">
              <div className="city-title">Pressure</div>
              <div className="city-output">{city.main.pressure}</div>
            </div>
            <div className="col-md-4">
              <div className="city-title">Humidity</div>
              <div className="city-output">{city.main.humidity}</div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="city-title">Lowest Temp(F)</div>
              <div className="city-output">{city.main.temp_min}F</div>
            </div>
            <div className="col-md-4">
              <div className="city-title">Highest Temp(F)</div>
              <div className="city-output">{city.main.temp_max}F</div>
            </div>
            <div className="col-md-4">
              <div className="city-title">Wind Speed</div>
              <div className="city-output">{city.wind.speed}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStoreToProps = ({ city }) => ({
  city
});
export default connect(mapStoreToProps)(CityInfo);
