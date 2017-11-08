import React from 'react';
import { connect } from 'react-redux';
import { cityReducer } from '../reducers/cityReducer';

class SearchHistory extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const city = this.props.city;
    console.log(city.history);
    return (
      <div className="card">
        <h2 className="card-header">Search History</h2>
        <table className="table table-striped">
          <tbody>
            {city.history.map(item => (
              <tr>
                <td>{item.name}</td>
                <td>{item.dt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStoreToProps = ({ city }) => ({
  city
});
export default connect(mapStoreToProps)(SearchHistory);
