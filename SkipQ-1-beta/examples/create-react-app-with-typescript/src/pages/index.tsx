import * as React from 'react';
import Button from 'material-ui/Button';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from 'material-ui/Dialog';
import Typography from 'material-ui/Typography';
import withStyles, { WithStyles, StyleRulesCallback } from 'material-ui/styles/withStyles';
import withRoot from '../withRoot';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { blue, green, deepOrange } from 'material-ui/colors';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import {
  Divider,
  List,
  Avatar,
  ListItemText,
  TextField,
  ListSubheader,
} from 'material-ui';
//import ImageIcon from 'material-ui-icons/Image';
//import WorkIcon from 'material-ui-icons/Work';
import BeachAccessIcon from 'material-ui-icons/BeachAccess';
import Directions from 'material-ui-icons/Directions';
import ChangeHistory from 'material-ui-icons/ChangeHistory';
import ExpansionPanel, {
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  ExpansionPanelActions,
} from 'material-ui/ExpansionPanel';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
//import Chip from 'material-ui/Chip';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';

//import IconButton from 'material-ui/IconButton';
//import MenuIcon from 'material-ui-icons/Menu';
import classNames from 'classnames';
const { FloatingActionButton, RaisedButton } = require('material-ui');
const MapsLocalPhone = BeachAccessIcon;
const DeviceAccessTime = BeachAccessIcon;
const MapsPlace = BeachAccessIcon;

import { createMuiTheme } from 'material-ui/styles';
import { indigo, amber, red, grey } from 'material-ui/colors';

const muiTheme = createMuiTheme({
  palette: {
    primary: indigo,
    accent: amber,
    error: red,
    type: 'light',
  },
});

const styles: StyleRulesCallback<'root'> = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 4,
    height: '100%',
  },
  iroot: {
    height: 'calc(100% - 60px)',
    overflow: 'scroll',
  },
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  left: {
    textAlign: 'left',
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    flexBasis: '33.33%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  redPist: {
    margin: 1,
    color: '#fff',
    backgroundColor: red[500],
  },
  blackPist: {
    margin: 1,
    color: '#fff',
    backgroundColor: grey['900'],
  },
  bluePist: {
    margin: 1,
    color: '#fff',
    backgroundColor: blue[500],
  },
  fast: {
    color: green[400],
  },
  med: {
    color: amber[400],
  },
  slow: {
    color: deepOrange[600],
  },
});

type State = {
  open: boolean,
};

const gondolaIcon = <Avatar><img width={40} src="https://d30y9cdsu7xlg0.cloudfront.net/png/7337-200.png" /></Avatar>;
@observer
class Index extends React.Component<WithStyles<'root'>> {
  @observable open = false;
  render() {
    const classes: any = this.props.classes;
    return (
      <MuiThemeProvider theme={muiTheme}>
        <style>{`
      html, body, #root, .Index-root-1 {
        height: 100%;
      }
      `}</style>
        <div className={this.props.classes.root}>
          <div className={this.props.classes.iroot}>
            <Dialog open={this.open} onClose={() => (this.open = false)}>
              <DialogTitle>Map</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  <img src="https://i.imgur.com/mLgftOQ.png" style={{width: "100%"}}/>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button color="primary" onClick={() => (this.open = false)}>
                  OK
                </Button>
              </DialogActions>
            </Dialog>
            <Typography variant="display1" gutterBottom>
              <span style={{ color: blue['800'] }}>Ski</span>pQ
            </Typography>
            <Typography variant="subheading" gutterBottom>
              Overview
            </Typography>
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.title} color="textSecondary">
                  Currently sitting in
                </Typography>
                <Typography variant="headline" component="h3">
                  Chairlift
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  Time to arrival at peak: <span className={classes.fast}>~12 min</span>
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => (this.open = true)}>Show on map</Button>
              </CardActions>
            </Card>
            <List>
              <ListSubheader style={{background: 'white'}}>Directly reachable lifts</ListSubheader>

              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  {gondolaIcon}
                  <ListItemText
                    className={classes.left}
                    primary="Gondola"
                    secondary={
                      <span>
                        <span className={classes.fast}>~10 min</span> wait time
                      </span>
                    }
                  />
                  <Avatar className={classes.bluePist}>9a</Avatar>
                  <Avatar className={classes.redPist}>16</Avatar>
                  <Avatar />
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    <li>Capacity: 10 persons</li>
                    <li>Last ascent: 16:15</li>
                  </Typography>
                </ExpansionPanelDetails>
                <Divider />
                <ExpansionPanelActions>
                  <Button size="small">...</Button>
                  <Button size="small" color="primary" onClick={() => (this.open = true)}>
                    Show on map
                  </Button>
                </ExpansionPanelActions>
              </ExpansionPanel>

              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Avatar>
                  <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMS4xLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ5MiA0OTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ5MiA0OTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij4KPGc+Cgk8cGF0aCBkPSJNNDI2LjA5NCwzNzFjOS4zMzQtMy4zMzMsMTYuMzM0LTkuMzMzLDIxLTE4YzQuNjY4LTguNjY3LDUuMzM0LTE3LjY2NywyLTI3bC0xNCw0ICAgYzIsNS4zMzQsMS42NjgsMTAuNjY3LTEsMTZjLTIuNjY2LDUuMzMzLTYuNjY2LDktMTIsMTFsLTM1OSwxMjFsNSwxNEw0MjYuMDk0LDM3MXoiIGZpbGw9IiMwMDAwMDAiLz4KCTxwYXRoIGQ9Ik05Ni4wOTUsMTYxYzEwLTIuNjY3LDE3LjMzMy04LjUsMjItMTcuNXM1LjY2Ny0xOC4zMzMsMy0yOHMtOC41LTE3LTE3LjUtMjJzLTE4LjUtNi4xNjctMjguNS0zLjUgICBzLTE3LjUsOC41LTIyLjUsMTcuNXMtNiwxOC41LTMsMjguNXM5LDE3LjMzMywxOCwyMlM4Ni4wOTUsMTYzLjY2Nyw5Ni4wOTUsMTYxeiIgZmlsbD0iIzAwMDAwMCIvPgoJPHBhdGggZD0iTTgxLjA5NSwyMTJjLTUuMzMzLTkuMzM0LTYuMTY3LTE3LjY2OC0yLjUtMjVjMy42NjctNy4zMzYsOS0xMy4xNjksMTYtMTcuNSAgIGM3LTQuMzQzLDE0LjgzMy01LjY3NiwyMy41LTRjOC42NjcsMS42NjgsMTUuMzM0LDYuODM0LDIwLDE1LjVsNDEsNzZsNzctMjFjNi0yLDEyLjUtMC4xNjcsMTkuNSw1LjVzMTAuNSwxMi41LDEwLjUsMjAuNXYxMDkgICBjMCw4LjY2Ny0zLjMzMiwxNC42NjctMTAsMThzLTEzLjMzNCwzLjE2Ny0yMC0wLjVjLTYuNjY2LTMuNjY3LTEwLTkuNS0xMC0xNy41bC0xLTgwbC04MCwyNGMtMTcuMzMzLDUuMzMzLTMwLjMzMywwLTM5LTE2ICAgTDgxLjA5NSwyMTJ6IiBmaWxsPSIjMDAwMDAwIi8+Cgk8cG9seWdvbiBwb2ludHM9IjIwNS4wOTUsMjMwIDIwNS4wOTUsMCAxODUuMDk1LDAgMTg1LjA5NSwyMzQgICIgZmlsbD0iIzAwMDAwMCIvPgoJPHBhdGggZD0iTTQ0LjA5NSwyNjJjLTQtNi42NjctNC4zMzMtMTIuNjY3LTEtMThzOC4xNjctNy44MzMsMTQuNS03LjVjNi4zMzMsMC4zMzQsMTEuMTY3LDQuMTY4LDE0LjUsMTEuNSAgIGwzNSw2N2M4LjY2NywxNiwyMS42NjcsMjQsMzksMjRjMi42NjcsMCw3LjY2Ny0xLDE1LTNsNDQtMTJjNy4zMzMtMi42NjIsMTMuMzMzLTEuODI5LDE4LDIuNWM0LjY2Nyw0LjMzMyw2LjE2Nyw5LjUsNC41LDE1LjUgICBzLTYuMTY3LDEwLTEzLjUsMTJsLTQ2LDEzYy02LjY2NywyLTE0LDMtMjIsM2MtMTQuNjY3LDAtMjgtMy42NjctNDAtMTFzLTIxLjMzMy0xNy4zMzMtMjgtMzBMNDQuMDk1LDI2MnoiIGZpbGw9IiMwMDAwMDAiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" />
                  </Avatar>
                  <ListItemText
                    className={classes.left}
                    primary="Chairlift"
                    secondary={
                      <span>
                        <span className={classes.med}>~30 min</span> via fastest route
                      </span>
                    }
                  />
                  <Avatar className={classes.redPist}>3</Avatar>
                  <Avatar className={classes.blackPist}>7</Avatar>

                  <Avatar />
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    <li>Capacity: 4 persons</li>
                    <li>Last ascent: 16:00</li>
                  </Typography>
                </ExpansionPanelDetails>
                <Divider />
                <ExpansionPanelActions>
                  <Button size="small">...</Button>
                  <Button size="small" color="primary" onClick={() => (this.open = true)}>
                    Show on map
                  </Button>
                </ExpansionPanelActions>
              </ExpansionPanel>

              <ListSubheader  style={{background: 'white'}}>Suggested routes</ListSubheader>
              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Avatar>
                    <Directions color={"primary"} />
                  </Avatar>
                  <ListItemText
                    className={classes.left}
                    primary="Trail route"
                    secondary={
                      <span>
                        <span>~60 min</span>{' '}
                        <span className={classes.slow}>difficult</span>
                      </span>
                    }
                  />
                  <Avatar className={classes.bluePist}>5</Avatar>
                  <Avatar className={classes.redPist}>3</Avatar>
                  <Avatar />
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    <div>
                      <Avatar className={classes.bluePist}>5</Avatar>{' '}
                      <Typography>Ski down piste 5 — 5 minutes</Typography>
                    </div>
                    <p>
                      <Avatar className={classes.redPist}>3</Avatar> Ski down piste 6 — 15 minutes
                    </p>
                    <p>{gondolaIcon} take Gondola — 10 minutes</p>
                    <p>
                      <Avatar className={classes.blackPist}>8</Avatar> Ski down piste 8 — 20 minutes
                    </p>
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>

              <ListSubheader  style={{background: 'white'}}>{`Near Points of Interest`}</ListSubheader>

              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Avatar>
                    <BeachAccessIcon />
                  </Avatar>
                  <ListItemText
                    className={classes.left}
                    primary="Ski Cabin"
                    secondary={
                      <span>
                        <span className={classes.med}>~30 min</span> via fastest route
                      </span>
                    }
                  />
                  <Avatar className={classes.redPist}>3</Avatar>
                  <Avatar />
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
                    lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>

              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Avatar>
                    <ChangeHistory />
                  </Avatar>
                  <ListItemText
                    className={classes.left}
                    primary="Mountain peak"
                    secondary={
                      <span>
                        <span className={classes.slow}>~60 min</span> via fastest route
                      </span>
                    }
                  />
                  <Avatar className={classes.bluePist}>5</Avatar>
                  <Avatar className={classes.redPist}>3</Avatar>
                  <Avatar />
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
                    lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </List>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                {/*<div className={classes.column}>*/}
                <Typography className={classes.heading}>Navigate to...</Typography>
                {/*} </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>Select trip destination</Typography>
  </div>*/}
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={classes.details}>
                {/*} <div className={classes.column} />
                <div className={classes.column}>
                 {/*} <Chip label="Mountain Peak" className={classes.chip} onDelete={() => {}} />
                </div>*/}
                <div className={classNames(classes.helper)}>
                  <TextField
                    id="search"
                    label="Input destination"
                    placeholder="Mountain Peak"
                    type="search"
                    className={classes.textField}
                    margin="normal"
                  />
                </div>
              </ExpansionPanelDetails>
              <Divider />
              <ExpansionPanelActions>
                <Button size="small" color="primary">
                  Fastest
                </Button>
                <Button size="small" color="primary">
                  Nicest
                </Button>
              </ExpansionPanelActions>
            </ExpansionPanel>
            <Button variant="raised" color="primary" onClick={() => (this.open = true)}>
              Show Map
            </Button>
            <Button variant="raised" color="secondary" onClick={() => (this.open = true)}>
              Statistics
            </Button>
          </div>
          <AppBar position="static" style={{ position: 'fixed', bottom: '0' }} color="primary">
            <Toolbar>
            {/*<Button color="inherit" onClick={() => (this.open = true)}>*/}
                <Typography color="inherit">Today</Typography>
              {/*</Button>*/}
              {/*<IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
</IconButton>*/}
              <Typography variant="title" color="inherit" className={classes.flex}>
                →&nbsp;30&nbsp;km 🕔&nbsp;2:20h ⊘&nbsp;45&nbsp;km/h
              </Typography>
              <Button color="inherit" onClick={() => (this.open = true)}>
                Details
              </Button>
            </Toolbar>
          </AppBar>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withRoot(withStyles(styles)(Index));
