import React from 'react';
import { NavLink } from 'react-router-dom';

// styled-components imports
import styled from 'styled-components';
import Theme from '../theme';

// Component imports
import AuthenticationButton from './AuthicationButton';

const StyledNavBar = styled.div `
  // flex-grow: 1;
  width: 100%;
  position: sticky;
  z-index: 3;
  background-color: ${props => `${props.theme.colors.transparent}`};

  #f-AppBar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1em;
    font-family: ${props => `${props.theme.fonts.raleway}`};

    .f-LogoText {
      color: ${props => `${props.theme.colors.light}`};
      margin-left: 1em;
      background-color: ${props => `${props.theme.colors.dark}`};
      padding: .5em;
      transition: .2s ease color;

      &:hover {
        text-decoration: none;
        color: ${props => `${props.theme.colors.grey}`};
        cursor: pointer;
      }
    }

    #f-Toolbar {
      text-align: right;

      .f-AppBarLinks {
        color: ${props => `${props.theme.colors.light}`};
        background-color: ${props => `${props.theme.colors.dark}`};
        text-decoration: none;
        padding: .5em;
        // margin: 0 1em;
        transition: .2s ease color;

          &:hover {
            color: ${props => `${props.theme.colors.grey}`};
            cursor: pointer;
          }
      }
    }
  }
`

export default function NavigationBar() {
  return (
    <Theme>
      <StyledNavBar>
        <div id="f-AppBar">
          {/* <h1 className="f-LogoText">nell hensey</h1> */}
          <NavLink className="f-LogoText" activeClassName="is-active" to="/">nell hensey</NavLink>
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
          <AuthenticationButton />
        </div>
      </StyledNavBar>
    </Theme>
  );
}
