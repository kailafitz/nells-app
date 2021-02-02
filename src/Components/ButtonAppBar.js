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
        {/* <h1 className="f-LogoText">nell hensey</h1> */}
        <NavLink className="f-LogoText" activeClassName="is-active" to="/"><p className="f-p">nell hensey</p></NavLink>
          <div id="f-Toolbar">
            {/* <NavLink className="f-AppBarLinks" activeClassName="is-active" to="/">
                home
            </NavLink> */}
            <NavLink className="f-AppBarLinks" activeClassName="is-active" to="/works">
                works
            </NavLink>
            <NavLink className="f-AppBarLinks" activeClassName="is-active" to="/about">
                bio
            </NavLink>
        </div>
      </div>
    </div>
  );
}
