import { Fragment } from 'react';

import styled from 'styled-components';

import logo from '../logo.svg';

const List = styled.ul`
  list-style: none;
`;
const Items = styled.li`
  display: inline-block;
  padding-right: 30px;
  cursor: pointer;
  color: whitesmoke;
`;
const Start = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: cornflowerblue;
  margin: 10px;
  border-radius: 1px; 
  box-shadow: 0 4px 10px 0 rgba(0,0,0,.2);

`;

const LeftSide = styled.div`
  display: flex;
  align-items: center;
`;

const Navbar = () => {
  return (
    <Fragment>
      <h2>Navigation Bar</h2>
      <Start>
        <LeftSide>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Bono</h2>
        </LeftSide>
        <List>
          <Items><span style={{color: 'white'}}>Home</span></Items>
          <Items>Services</Items>
          <Items>Contact us</Items>
          <Items>Our Project</Items>
        
        </List>
      </Start>
    </Fragment>
  );
};



export default Navbar;


