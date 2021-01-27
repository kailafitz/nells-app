import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <div position="static" id="f-AppBar">
        <h1 className="f-LogoText">Nell Hensey</h1>
          <div id="f-Toolbar">
            <NavLink className="f-AppBarLinks" activeClassName="is-active" to="/">
                Home
            </NavLink>
            <NavLink className="f-AppBarLinks" activeClassName="is-active" to="/works">
                Works
            </NavLink>
            <NavLink className="f-AppBarLinks" activeClassName="is-active" to="/about">
                About
            </NavLink>
            <NavLink className="f-AppBarLinks" activeClassName="is-active" to="/news">
                News
            </NavLink>
        </div>
      </div>
    </div>
  );
}
