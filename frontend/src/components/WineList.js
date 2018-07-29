import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import WineCard from './WineCard';

// Color styles to be used by search text field
const theme = createMuiTheme({
palette: {
  primary: { main: '#3F51B5' }
}
});

class WineList extends Component {

  state = {
    query: '',
    wines: this.props.wines
  };

  handleChange = event => {
    const query = event.target.value;
    // Show all wines if no search query entered
    if (query === '') {
      this.setState({
        query,
        wines: this.props.wines
      });
    }

    // Filter wines by checking search query on variety & provice
    else {
      this.setState({
        query
      });
      const filteredWines = this.props.wines
        .filter(wine => wine.get('variety').toLowerCase().includes(query.toLowerCase())
        || wine.get('province').toLowerCase().includes(query.toLowerCase()));
      this.setState({
        wines: filteredWines
      });
    }
  }

  render() {

    const { query, wines } = this.state;

    return (
      <div>
        <div>
          <MuiThemeProvider theme={theme}>
            <TextField
              label="Search by variety or province"
              value={query}
              onChange={this.handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon/>
                  </InputAdornment>
                ),
              }}
              style={{width: '50%', margin: '20px'}}
            />
          </MuiThemeProvider>
        </div>
        <ul className='wine-list'>
          {
            wines.map((wine) => (
              <WineCard key={wine.id} wine={wine}/>
            ))
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ wines }) {
  return { wines };
}

export default connect(mapStateToProps)(WineList);
