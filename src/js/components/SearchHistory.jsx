import React from 'react';
import { connect } from 'react-redux';
import { cityReducer } from '../reducers/cityReducer';

class SearchHistory extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const city = this.props.history;
    const counter = 0;
    return (
      <div className="card">
        <h2 className="card-header">Search History</h2>
        <table className="table table-striped">
          <tbody>
            {city
              .map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.time}</td>
                </tr>
              ))
              .reverse()}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStoreToProps = function(store) {
  return { history: store.city.history };
};
export default connect(mapStoreToProps)(SearchHistory);
