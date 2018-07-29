import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import LocationIcon from '@material-ui/icons/LocationOn';
import StarIcon from '@material-ui/icons/Star';
import MoneyIcon from '@material-ui/icons/AttachMoney';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteFillIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';

// Styles to be applied to card components
const styles = theme => ({
  card: {
    minWidth: '60%',
    maxWidth: '80%',
    margin: 'auto'
  },
  title: {
    color: '#D32F2F',
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  }
});

// Color to be applied to various components
const theme = createMuiTheme({
palette: {
  primary: { main: '#D32F2F' }
}
});

class WineCard extends Component {

  state = {
    expanded: false,
    favorited: false
   };

  // Handle toggle click on favorite button
  toggleFavorite = () => {
    this.setState((state) => ({
      favorited: !state.favorited
    }));
  }

  // Handle click on expand button
  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {

    const { classes, wine } = this.props;

    return (
      <div className='wine-card'>
        <Card className={classes.card}>
          <CardHeader
            title={wine.get('designation')}
            subheader={wine.get('variety')}
            classes={{title: classes.title}}/>
          <CardContent>
            <div className='info-list'>
              <MuiThemeProvider theme={theme}>
                <div className='info'>
                  <LocationIcon color='primary'/>
                  <Typography>{wine.get('province')}</Typography>
                </div>
                <div className='info'>
                  <StarIcon color='primary'/>
                  <Typography>{wine.get('points')}</Typography>
                </div>
                <div className='info'>
                  <MoneyIcon color='primary'/>
                  <Typography>{wine.get('price')}</Typography>
                </div>
              </MuiThemeProvider>
            </div>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <MuiThemeProvider theme={theme}>
              <IconButton aria-label='Toggle favorite' onClick={this.toggleFavorite}>
                {
                  this.state.favorited
                    ? <FavoriteFillIcon color='primary'/>
                    : <FavoriteBorderIcon/>
                }
              </IconButton>
            </MuiThemeProvider>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label='Show more'
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout='auto' unmountOnExit>
            <CardContent>
              <Typography paragraph>
                {wine.get('description')}
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }
}

WineCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WineCard);
