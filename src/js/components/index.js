import { connect } from 'react-redux';
import SearchHistory from './SearchHistory';

function mapStoreToProps(store) {
  return {
    city: store.city
  };
}

export default connect(mapStoreToProps)(SearchHistory);
