import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/wines';
import LoadingBar from 'react-redux-loading';
import wine from '../assets/wine.gif';
import WineList from './WineList';

class App extends Component {

  state = { showLoading: true };

  componentDidMount() {
    // Fetch initial data
    this.props.dispatch(handleInitialData());
    // Display loading animation for 1.5 seconds
    setTimeout(() => {
      this.setState({showLoading: false});
    }, 1500);
  }

  render() {

    const { showLoading } = this.state;

    return (
      <div className="App">
        <LoadingBar />
        {
          showLoading ? <img alt='loading-animation' src={wine} className='loading-animation'/>
          : <WineList/>
        }
      </div>
    );
  }
}

export default connect()(App);
