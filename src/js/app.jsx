import React from 'react';
import Search from './components/Search';
import SearchHistory from './components/SearchHistory';
import CityInfo from './components/CityInformation';

export default class App extends React.Component {
  render() {
    const cities = [
      'San Diego',
      'New York',
      'Washington D.C.',
      'London',
      'Tokyo'
    ];
    
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>Origin Weather Application</h1>
          <h4>Always know if you'll need an umbrella!</h4>
        </div>
        <Search />
        <div className="row">
          <div className="col-md-6">
            <CityInfo />
          </div>
          <div className="col-md-6">
            <SearchHistory />
          </div>
        </div>
      </div>
    );
  }
}
