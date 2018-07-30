import React from 'react';
import { connect } from 'react-redux';
import { updateCity, searchHistory } from '../actions/cityActions';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: ''
    };
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    // this.handleCityButton = this.handleCityButton.bind(this);
  }
  handleSearch(e) {
    const cityValue = e.target.value || this.state.city;
    this.props.updateCity(cityValue);
    this.props.searchHistory(cityValue);
  }

  // handleCityButton(e) {
  //   this.props.updateCity(e.target.value);
  //   this.props.searchHistory(e.target.value);
  // }

  handleSearchInput(e) {
    this.setState({
      city: e.target.value
    });
  }

  render() {
    const cities = [
      'San Diego',
      'New York',
      'Washington D.C.',
      'London',
      'Tokyo',
      'Birmingham'
    ];

    return (
      <div className="form-group">
        {cities.map(city => (
          <button
            type="button"
            className="btn btn-primary mr-3"
            value={city}
            key={city}
            onClick={this.handleSearch}
          >
            {city}
          </button>
        ))}

        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="City"
            defaultValue={this.state.city}
            onChange={this.handleSearchInput}
          />
          <span className="input-group-btn">
            <button className="btn btn-secondary" onClick={this.handleSearch}>
              Go!
            </button>
          </span>
        </div>
      </div>
    );
  }
}

export default connect(null, { updateCity, searchHistory })(Search);
